
<style scoped>

    .fsl-top {
        text-align: center;
        color: #e60012;
        font-size: 18px;
    }
    .fsl-top {
        height: 45px;
        line-height: 45px;
        background-color: #e60012;
    }
    .fsl-top p {
        color: #fff;
    }
    .fsl-cent {
        width: 100%;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
    }
    .follow {
        width: 100%;
        height: 190px;
    }
    .follow-left {
        float: left;
        width: 180px;
        line-height: 190px;
        background-color: #fff3f3;
        color: #e60012;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }
    .follow-right {
        float: right;
        width: 680px;
        padding: 20px;
        line-height: 25px;
        font-size: 13px;
    }
    .fixed {
        width: 100%;
        height: 120px;
        border-top: 1px dashed #ccc;
    }
    .fixed-left {
        float: left;
        width: 180px;
        line-height: 119px;
        background-color: #fff3f3;
        color: #e60012;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }
    .fixed-right {
        float: right;
        width: 680px;
        padding: 20px;
        line-height: 25px;
        font-size: 13px;
    }
    .lease {
        width: 100%;
        height: 90px;
        border-top: 1px dashed #ccc;
    }
    .lease-left {
        float: left;
        width: 180px;
        line-height: 89px;
        background-color: #fff3f3;
        color: #e60012;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }
    .lease-right {
        float: right;
        width: 680px;
        padding: 20px;
        line-height: 25px;
        font-size: 13px;
    }
    .short {
        width: 100%;
        height:165px;
        border-top: 1px dashed #ccc;
    }
    .short-left {
        float: left;
        width: 180px;
        line-height: 163px;
        background-color: #fff3f3;
        color: #e60012;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }
    .short-right {
        float: right;
        width: 680px;
        padding: 20px;
        line-height: 25px;
        font-size: 13px;
    }
    .comprehensive {
        width: 100%;
        height:165px;
        border-top: 1px dashed #ccc;
    }
    .comprehensive-left {
        float: left;
        width: 180px;
        line-height: 163px;
        background-color: #fff3f3;
        color: #e60012;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
    }
    .comprehensive-right {
        float: right;
        width: 680px;
        padding: 20px;
        line-height: 25px;
        font-size: 13px;
    }
    .return-equipment {
        width: 100%;
        margin-top: 50px;
    }
    .rule {
        color: #e60012;
        font-size: 14px;
    }
    .equipment {
        width: 860px;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        background-color: #2199f6;
        color: #fff;
    }
    .equipment p{
        float: left;
        width: 100px;
        text-align: center;
    }
    .equipment p:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .equipment p:nth-child(4) {
        width: 250px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .equipment p:nth-child(6) {
        width: 210px;
        border-left: 1px solid #ccc;
    }
    .equipment-cont {
        width: 100%;
        height: 542px;
        border: 1px solid #ccc;
        border-top: 0px;
        color: #000;
    }
    .equipment-one {
        width: 100%;
        height: 120px;
    }
    .equipment-one .leasehold {
        float: left;
        width: 100px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .equipment-one .leasehold:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .equipment-one .leasehold .fault:first-child {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .equipment-one .leasehold .fault:last-child {
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .equipment-one .leasehold:nth-child(4) {
        width: 560px;
        border-left: 1px solid #ccc;
    }
    .equipment-one .leasehold:nth-child(4) .fault:first-child div:first-child {
        width: 248px;
        float: left;
        color: #2199f6;
    }
    .equipment-one .leasehold:nth-child(4) .fault:first-child div:last-child {
        width: 102px;
        float: left;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .equipment-one .leasehold:nth-child(4) .fault:last-child {
        line-height: 20px;
        padding: 20px;
    }
    .equipment-left {
        float: left;
        width: 650px;
        height: 240px;
    }
    .equipment-right {
        width: 210px;
        height: 241px;
        float: left;
        border: 1px solid #ccc;
        border-right: 0px;
        border-bottom: 0px;
        padding: 90px 30px;
        color: #000;
        line-height: 20px;
    }
    .equipment-two {
        width: 100%;
        height: 120px;
        border-top: 1px solid #ccc;
    }
    .equipment-two .leasehold {
        float: left;
        width: 100px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .equipment-two .leasehold:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .equipment-two .leasehold .fault:first-child {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .equipment-two .leasehold .fault:last-child {
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .equipment-two .leasehold:nth-child(4) {
        width: 350px;
        border-left: 1px solid #ccc;
    }
    .equipment-two .leasehold:nth-child(4) .fault:first-child div:first-child {
        width: 249px;
        float: left;
        color: #2199f6;
    }
    .equipment-two .leasehold:nth-child(4) .fault:first-child div:last-child {
        width: 100px;
        float: left;
        border-left: 1px solid #ccc;
    }
    .equipment-two .leasehold:nth-child(4) .fault:last-child {
        line-height: 20px;
        padding: 15px;
    }
    .equipment-three {
        width: 100%;
        height: 120px;
        border-top: 1px solid #ccc;
    }
    .equipment-three .leasehold {
        float: left;
        width: 100px;
        height: 120px;
        line-height: 120px;
        text-align: center;
    }
    .equipment-three .leasehold:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        line-height: 30px;
        padding: 15px 0;
    }
    .equipment-three .leasehold .fault:first-child {
        width: 100%;
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .equipment-three .leasehold .fault:last-child {
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .equipment-three .leasehold:nth-child(4) {
        width: 250px;
        padding: 10px;
        line-height: 20px;
        border-left: 1px solid #ccc;
        text-align: left;
        color: #2199f6;
    }
    .equipment-three .leasehold:nth-child(4) .fault:last-child {
        line-height: 20px;
        padding: 15px;
    }
    .equipment-three .leasehold:nth-child(5) {
        width: 100px;
        border-left: 1px solid #ccc;
    }
    .equipment-four {
        float: left;
        width: 100%;
        height: 140px;
        border-top: 1px solid #ccc;
    }
    .equipment-four .leasehold {
        float: left;
        width: 100px;
        height: 140px;
        line-height: 140px;
        text-align: center;
    }
    .equipment-four .leasehold:nth-child(2) {
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
    }
    .equipment-four .leasehold .fault:first-child {
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid #ccc;
    }
    .equipment-four .leasehold .fault:last-child {
        width: 100%;
        height: 70px;
        line-height: 70px;
        text-align: center;
    }
    .equipment-four .leasehold:nth-child(4) {
        width: 250px;
        padding: 10px;
        line-height: 20px;
        border-left: 1px solid #ccc;
        text-align: left;
        color: #2199f6;
    }
    .equipment-four .leasehold:nth-child(4) .fault:last-child {
        line-height: 20px;
        padding: 15px;
    }
    .equipment-four .leasehold:nth-child(5) {
        width: 100px;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        }
    .equipment-four .leasehold:nth-child(6) {
        width:210px;
    }

</style>

<template>

    <div class="helpcen-one">
        <div class="fsl-top"><p>租金方案</p></div>
        <div class="fsl-cent">
            <div class="follow">
                <div class="follow-left">
                    <p>随租随还</p>
                </div>
                <div class="follow-right">
                    <p>1. 6个月后可随时退还，承租方无需承担额外租金违约费用；但若租期未满12个月，客户需承担退机运费。</p>
                    <p>2. 若6个月内退还（即实际租期不足6个月）：当实际租期N不足3个月时，广租将收取额外3个月租金作为随租随还服务费；当实际租期N已满3个月且不足6个月时，广租将收取额外（6-N）个月的租金作为随租随还服务费（即加上服务费共收取6个月的租金）。同时客户需承担退机运费。</p>
                    <p>3. 租期结束且不再续租时，设备需退还给广租。</p>
                    <p>4. 由于退机运输造成的设备损坏，由客户和承运方承担损失。</p>
                </div>
            </div>
            <div class="fixed">
                <div class="fixed-left">
                    <p>随租随还</p>
                </div>
                <div class="fixed-right">
                    <p>1. 若提前退还设备，广租将收取未交纳租金的50%作为违约金，同时客户需承担退机运费。</p>
                    <p>2. 租期结束且不再续租时，设备需退还给广租，由广租承担退机运费</p>
                    <p>3. 由于退机运输造成的的设备损坏，由客户和承运方承担损失。</p>
                   
                </div>
            </div>
            <div class="lease">
                <div class="lease-left">
                    <p>租完即送</p>
                </div>
                <div class="lease-right">
                    <p>1. 租期结束后，设备归客户所有。</p>
                    <p>2. 不可将设备退还给广租，客户必须交齐全部租金。</p>       
                </div>
            </div>

            <div class="short">
                <div class="short-left">
                    <p>租完即送</p>
                </div>
                <div class="short-right">
                    <p>1. 一般租期不长于3个月。</p>
                    <p>2. 设备到期归还广租。</p>
                    <p>3. 租赁费用一次性付清。</p>
                    <p>4. 若租期结束未归还设备，将继续以相应订单租赁价格计费。</p>
                    <p>5. 由于退机运输造成的的设备损坏，由客户和承运方承担损失。</p>
                               
                </div>
            </div>

            <div class="comprehensive">
                <div class="comprehensive-left">
                    <p>综合租赁</p>
                </div>
                <div class="comprehensive-right">
                    <p>1. 前部分租期为固定租期，一般为12个月或24个月。若在固定租期内提前退还，则广租将收取固定租期内未交纳租金的50%作为违约金，同时客户需承担退机运费。</p>
                    <p>2. 超过固定租期后可随时退还，承租方无需承担额外费用（退机运费由广租承担）。</p>
                    <p>3. 租期结束且不再续租时，设备需退还给广租。</p>
                    <p>4. 由于退机运输造成的的设备损坏，由客户和承运方承担损失。</p>
                               
                </div>
            </div>            
        </div>

        <div class="return-equipment">
            <p class="rule">【归还设备】当月的租金&违约金收取规则如下：</p>
            <div class="equipment-cont">
                <div class="equipment">
                    <p>租赁方式</p>
                    <p>机器类型</p>
                    <p>退机原因</p>
                    <p>违约金</p>
                    <p>运费</p>
                    <p>当月租金</p>
                </div>

                <div class="equipment-one">
                    <div class="leasehold">
                        <span>租完即送</span>
                    </div>
                    <div class="leasehold">
                        <span>新机</span>
                    </div>
                        
                    <div class="leasehold">
                        <div class="fault">
                            <span>非故障退机</span>
                        </div>
                        <div class="fault">
                            <span>机器有故障</span>
                        </div>
                    </div>
                    <div class="leasehold">
                        <div class="fault">
                            <div>合约期内全部租金</div>
                            <div>承担方承担</div>
                        </div>
                        <div class="fault">
                            <span>新机不支持故障退机流程，广租为用户提供维修服务，客户不愿意维修坚持退机时，视为"非故障退机"处理</span>
                        </div>
                    </div>
                </div>
                
                <div class="equipment-left">
     
                    <div class="equipment-two">
                        <div class="leasehold">
                            <span>固定租期</span>
                        </div>
                        <div class="leasehold">
                            <span>新机</span>
                        </div>
                            
                        <div class="leasehold">
                            <div class="fault">
                                <span>非故障退机</span>
                            </div>
                            <div class="fault">
                                <span>机器有故障</span>
                            </div>
                        </div>
                        <div class="leasehold">
                            <div class="fault">
                                <div>合约期内剩余租金的50%</div>
                                <div>承担方承担</div>
                            </div>
                            <div class="fault">
                                <span>新机不支持故障退机流程，广租为用户提供维修服务，客户不愿意维修坚持退机时，视为"非故障退机"处理</span>
                            </div>
                        </div>
                    </div>

                    <div class="equipment-three">
                        <div class="leasehold">
                            <span>随租随还</span>
                        </div>
                        <div class="leasehold">
                            <p>新机</p>
                            <p>&</p>
                            <p>二手机</p>
                        </div>
                            
                        <div class="leasehold">
                            <div class="fault">
                                <span>非故障退机</span>
                            </div>
                            <div class="fault">
                                <span>机器有故障</span>
                            </div>
                        </div>
                        <div class="leasehold">
                            <span>租期不满六个月,当实际租期N不足3个月时，广租将收取额外3个月租金作为随租随还服务费；当实际租期N已满3个月且不足6个月时，广租将收取(6-N)个月的租金作为随租随还服务费，租期满6个月无违约金</span>
                        </div>
                        <div class="leasehold">
                            <div class="fault">
                                <span>承担方承担</span>
                            </div>
                            <div class="fault">
                                <span>广租承担</span>
                            </div>
                        </div>
                    </div>
                </div>
                 <div class="equipment-right">
                     <span>自当期租金首日期至租返收货为止，7日内（起租到租返收获日）免收当月租金</span>
                 </div>
                <div class="equipment-four">
                        <div class="leasehold">
                            <span>短期租赁</span>
                        </div>
                        <div class="leasehold">
                            <span>二手设备</span>
                        </div>
                            
                        <div class="leasehold">
                            <div class="fault">
                                <span>非故障退机</span>
                            </div>
                            <div class="fault">
                                <span>机器有故障</span>
                            </div>
                        </div>
                        <div class="leasehold">
                            <span>剩余租赁时限不单独折算租金不退还（例1.租赁期限为32个月，但实际使用仅1个月就退还，剩余的2个月租赁期限，不会单独按月折算费用退还。例2.租赁期限为1个月，但实际使用一周就退还，剩余的租赁天数，不会单独按天折算费用退还）</span>
                        </div>
                        <div class="leasehold">
                            <span>广租承担</span>
                        </div>
                        <div class="leasehold">
                            <span>---</span>
                        </div>
                </div>
               
            </div>
        </div>
    </div>

</template>

<script>


    export default {

        components : {

        },

        data () {

            return {

            }

        },

        methods : {

        },

        created () {
            
        },

        mounted () {

        }

    }

</script>
