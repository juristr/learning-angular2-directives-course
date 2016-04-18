import {Page, NavController, NavParams} from 'ionic-angular';
import {ItemDetailsPage} from '../item-details/item-details';

import { DonutChartDirective } from '../../components/donut-chart.directive';

@Page({
  templateUrl: 'build/pages/list/list.html',
  directives: [ DonutChartDirective ]
})
export class ListPage {
  humidityPercent: number = 34;

  constructor(private nav: NavController, navParams: NavParams) {

  }

}
