/*
package com.example.hospital_backstage.controller;

import com.example.hbgd.pojo.EchartsShi;
import com.example.hbgd.service.EchartsService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

*/
/**
 * @author Administrator
 * @create 2019-11-21 8:40
 * @desc
 **//*

@RequestMapping("/echarts")
@Controller
public class EchartsController {
   @Resource
    private EchartsService echartsService;

    @RequestMapping("/selectEcharts")
    @ResponseBody
    public Map<String,Object> selectEcharts(){
        List<EchartsShi> echartsShis = echartsService.selectEcharts();
        List<EchartsShi> echartsShis1 = echartsService.selectEchartsna();
        System.out.println();
        Map<String,Object> map=new HashMap<String,Object>();
        map.put("eNum",echartsShis);
        map.put("eName",echartsShis1);
        System.out.println(echartsShis);
        System.out.println(echartsShis1);
        return map;
    }
    */
/*扇形图*//*

    @RequestMapping("/selectEchartsAll")
    @ResponseBody
    public List<EchartsShi> selectEchartsAll(){
        List<EchartsShi> echartsShis = echartsService.selectEchartsAll();
        System.out.println(echartsShis);
        return echartsShis;
    }
}
*/
