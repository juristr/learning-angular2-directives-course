import { Directive, OnInit, Input, Inject, ChangeDetectionStrategy, ElementRef, OnChanges, SimpleChange } from 'angular2/core';
import * as d3 from 'd3';

@Directive({
    selector: 'area-chart'
})
export class AreaChartDirective implements OnChanges {
    @Input() data;
    svg: any;
    width: number;
    height: number;
    margin: { top: number, right: number, left: number, bottom: number };

    constructor(public elementRef: ElementRef) {
        var el = this.elementRef.nativeElement;
        
        // http://stackoverflow.com/questions/31562224/how-to-fill-a-single-value-in-the-donut-chart
        
        var percent = 20;

        var data = [percent, 100-percent] //as you see, i have added 55 (100-45).

        var width = 300,
            height = 300,
            radius = Math.min(width, height) / 2;

        var color = d3.scale.ordinal()
            .domain(data)
            .range(["#ffff00", "#1ebfc5"]);

        var arc = d3.svg.arc()
            .outerRadius(radius - 90)
            .innerRadius(radius - 80);

        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d });

        var svg = d3.select(el).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        var g = svg.selectAll(".arc")
            .data(pie(data))
            .enter().append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", arc)
            .style("fill", function(d, i) { return color(d.data); });
    }

    ngOnChanges(changes) {
        console.log('re-rendering due to changes', changes);

        if (changes.data) {
            this.data = changes.data.currentValue;
            this.render();
        }
    }

    render() {
        // var data = [45, 55] //as you see, i have added 55 (100-45).

        // var width = 400,
        //     height = 400,
        //     radius = Math.min(width, height) / 2;

        // var color = d3.scale.ordinal()
        //     .domain(data)
        //     .range(["#ffff00", "#1ebfc5"]);

        // var arc = d3.svg.arc()
        //     .outerRadius(radius - 90)
        //     .innerRadius(radius - 80);

        // var pie = d3.layout.pie()
        //     .sort(null)
        //     .value(function(d) { return d });

        // var svg = d3.select("body").append("svg")
        //     .attr("width", width)
        //     .attr("height", height)
        //     .append("g")
        //     .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        // var g = svg.selectAll(".arc")
        //     .data(pie(data))
        //     .enter().append("g")
        //     .attr("class", "arc");

        // g.append("path")
        //     .attr("d", arc)
        //     .style("fill", function(d, i) { return color(d.data); });
    }


}