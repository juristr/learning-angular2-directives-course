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

    constructor(public elementRef: ElementRef) {
        var el = this.elementRef.nativeElement;

        var margin = {
            top: 20, right: 20, bottom: 30, left: 50
        };
        this.width = 400 - margin.left - margin.right;
        this.height = 200 - margin.top - margin.bottom;

        this.svg = d3.select(el).append("svg")
            .attr("width", this.width + margin.left + margin.right)
            .attr("height", this.height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    }
    
    ngOnChanges(changes) {
        console.log('re-rendering due to changes', changes);
        
        if(changes.data){
            this.data = changes.data.currentValue;
            this.render();
        }
    }

    render() {
        var x = d3.time.scale()
            .range([0, this.width]);

        var y = d3.scale.linear()
            .range([this.height, 0]);

        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");

        var area = d3.svg.area()
            .x(function(d) { return x(d.date); })
            .y0(this.height)
            .y1(function(d) { return y(d.close); });



        var parseDate = d3.time.format("%H:%M:%S").parse;

        this.data.forEach(function(d) {
            if(!(d.date instanceof Date)){
                d.date = parseDate(d.date);    
            }
            
            d.close = +d.close;
        });

        x.domain(d3.extent(this.data, function(d) { return d.date; }));
        y.domain([0, d3.max(this.data, function(d) { return d.close; })]);

        this.svg.append("path")
            .datum(this.data)
            .attr("class", "area")
            .attr("d", area);

        this.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + this.height + ")")
            .call(xAxis);

        this.svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end")
            .text("temperature");
    }


}