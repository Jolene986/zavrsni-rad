<Layout>
         <Pocetna teskost = {this.setTezina}
         stejtsetNadimak = {this.setNadimak} stejtSetTip = {this.setTipKviza}/>
         <Quiz/>
          </Layout> 



const odabranaPitanja = this.state.pitanja.filter(pitanje => {
    return pitanje.tipKviza === 'zivotinje'
}
)

//<modal modalClosed = {this.neIdemNaRezultate} />