/*
package com.example.hospital_backstage.service.impl;

import com.example.hbgd.dao.EchartsDao;
import com.example.hbgd.pojo.EchartsShi;
import com.example.hbgd.service.EchartsService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

*/
/**
 * @author Administrator
 * @create 2019-11-21 8:45
 * @desc
 **//*

@Service
public class EchartsServiceimpl implements EchartsService {
    @Resource
    private EchartsDao echartsDao;
    @Override
    public List<EchartsShi> selectEcharts() {
        return echartsDao.selectEcharts();
    }

    @Override
    public List<EchartsShi> selectEchartsna() {
        return echartsDao.selectEchartsna();
    }
    */
/*扇形图*//*

    @Override
    public List<EchartsShi> selectEchartsAll() {
        return echartsDao.selectEchartsAll();
    }
}
*/
