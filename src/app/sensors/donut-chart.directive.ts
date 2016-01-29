import { Directive, OnInit, Input, Inject, ChangeDetectionStrategy, ElementRef, OnChanges, SimpleChange } from 'angular2/core';
import * as d3 from 'd3';

// http://bl.ocks.org/mbostock/3750941

@Directive({
    selector: 'donut-chart',
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
export class DonutChartDirective implements OnInit, OnChanges {
    @Input() data: number;
    foreground: any;
    progress: any;
    text: any;
    twoPi: any;
    formatPercent: any;
    arc: any;

    constructor(public elementRef: ElementRef) {
        var el = this.elementRef.nativeElement;

        var width = 300,
            height = 300;
        this.twoPi = 2 * Math.PI;
        this.progress = 0;
        this.formatPercent = d3.format(".0%");

        this.arc = d3.svg.arc()
            .startAngle(0)
            .innerRadius(60)
            .outerRadius(80);

        var svg = d3.select(el).append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var meter = svg.append("g")
            .attr("class", "progress-meter");

        meter.append("path")
            .attr("class", "background")
            .attr("d", this.arc.endAngle(this.twoPi));

        this.foreground = meter.append("path")
            .attr("class", "foreground");

        this.text = meter.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", ".35em");
    }

    ngOnInit() {
        this.render(0);
    }

    ngOnChanges(changes) {
        this.render(changes.data.currentValue);
    }

    render(percentage) {
        var i = d3.interpolate(this.progress, percentage / 100);
        var vm = this;

        d3.transition()
            .tween("progress", function() {
                return function(t) {
                    vm.progress = i(t);
                    vm.foreground.attr("d", vm.arc.endAngle(vm.twoPi * vm.progress));
                    vm.text.text(vm.formatPercent(vm.progress));
                };
            });

    }


}