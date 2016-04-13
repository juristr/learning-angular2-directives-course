import { Component, Directive, OnInit, Input, ElementRef, OnChanges, ChangeDetectionStrategy, SimpleChange } from 'angular2/core';
import * as d3 from 'd3';

@Directive({
    selector: 'donut-chart'
})
export class DonutChartDirective implements OnChanges {
    @Input() data: number;
    progress: number = 0;
    arc: any;
    twoPi: number;
    foreground: any;
    textEl: any;

    constructor(private elementRef: ElementRef) {
        let el = this.elementRef.nativeElement;

        let width = 200;
        let height = 200;

        this.twoPi = 2 * Math.PI;

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

        this.textEl = meter.append("text")
            .attr("text-anchor", "middle")
            .attr("dy", ".35em");

    }

    ngOnInit() {
        this.render(this.data);
    }

    ngOnChanges(changes : { [ propName: string ] : SimpleChange }) {
        console.log('changes', changes);

        this.render(changes['data'].currentValue);
    }

    render(percentage) {
        var i = d3.interpolate(this.progress, percentage / 100);
        var vm = this;

        d3.transition()
            .tween("progress", function() {
                return function(t) {
                    vm.progress = i(t);
                    vm.foreground.attr("d", vm.arc.endAngle(vm.twoPi * vm.progress));
                    vm.textEl.text(d3.format(".0%")(vm.progress));
                };
            });

    }

}