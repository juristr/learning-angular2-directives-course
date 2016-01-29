import { Directive, OnInit, Input, Inject, ChangeDetectionStrategy, ElementRef, OnChanges, SimpleChange } from 'angular2/core';
import * as d3 from 'd3';

@Directive({
    selector: 'area-chart',
    // template: `
    // <svg width="300" height="300">
    //     <g transform="translate(150,150)">
    //         <text dx="-20">undefined%</text>
    //         <g class="arc">
    //             <path d=""
    //             style="fill: rgb(255, 255, 0);">
    //             </path>
    //         </g>
    //         <g class="arc">
    //             <path d=""
    //             style="fill: rgb(30, 191, 197);">
    //             </path>
    //         </g>
    //     </g>
    // </svg>
    // `
})
export class AreaChartDirective implements OnInit, OnChanges {
    @Input() data: number;
    svg: any;
    width: number;
    height: number;
    margin: { top: number, right: number, left: number, bottom: number };
    radius: number;
    arc: any;
    textEl: any;

    constructor(public elementRef: ElementRef) {

        var el = this.elementRef.nativeElement;

        this.width =300;
        this.height = 300;
        this.radius = Math.min(this.width, this.height) / 2;

        this.arc = d3.svg.arc()
            .outerRadius(this.radius - 90)
            .innerRadius(this.radius - 80);

        this.svg = d3.select(el).append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
            
        this.textEl = this.svg.append("text")
                        .attr("dx", function(d) { return -20 });
    }

    ngOnInit() {
        this.render(0);
    }

    ngOnChanges(changes) {
        console.log('re-rendering due to changes', changes.data.currentValue);

        this.render(changes.data.currentValue);

        // if (changes.data) {
        //     this.data = changes.data.currentValue;
        //     this.render();
        // }
    }

    render(number) {
        var percent = number;
        var data = [percent, 100 - percent] //as you see, i have added 55 (100-45).
        
        
        // http://stackoverflow.com/questions/31562224/how-to-fill-a-single-value-in-the-donut-chart

        var color = d3.scale.ordinal()
            .domain(data)
            .range(["#ffff00", "#1ebfc5"]);


        var pie = d3.layout.pie()
            .sort(null)
            .value(function(d) { return d });

        // this.svg.append("text")
        //     .attr("dx", function(d) { return -20 })
        this.textEl.text(function(d) {
            console.log('text element: ', d); 
            return `${percent} %`; 
        });


        var g = this.svg.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g")
            .attr("class", "arc");

        g.append("path")
            .attr("d", this.arc)
            .style("fill", function(d, i) { return color(d.data); });

    }


}