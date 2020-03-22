
	function percent()
	{
		var sz = 4.5;	
		let nm = parseFloat(document.getElementById("percA0").innerHTML);
		let nPatNet = parseFloat(document.getElementById("percP0").innerHTML);
		let nPasNoCorrent = parseFloat(document.getElementById("percP1").innerHTML);
		let nPasCorrent = parseFloat(document.getElementById("percP2").innerHTML);
		let acNoCorrent = document.getElementById("acNoCorrent");
		let acCorrent = document.getElementById("acCorrent");
		let patNet = document.getElementById("patNet");
		let pasNoCorrent = document.getElementById("pasNoCorrent");
		
		/* acNoCorrent */
		if (nm == 69) acNoCorrent.setAttribute("title", "nice");
		else acNoCorrent.setAttribute("title", "Actiu no corrent");
		acNoCorrent.style.backgroundColor = "#9b59b6";
		acNoCorrent.innerHTML = nm + "%";
		acNoCorrent.style.height = nm * sz + "px";
		acNoCorrent.style.width = 75 * sz + "px";
		acNoCorrent.style.lineHeight = nm * sz + "px";
		
		/* acCorrent */
		if (nm == 31) acCorrent.setAttribute("title", "nice");
		else acCorrent.setAttribute("title", "Actiu corrent");
		acCorrent.style.backgroundColor = "#27ae60";
		acCorrent.innerHTML = Number((100 - nm).toFixed(2)) + "%";
		acCorrent.style.height = (100 - nm) * sz + "px";
		acCorrent.style.width = 75 * sz + "px";
		acCorrent.style.lineHeight = (100 - nm) * sz + "px";

		/* patNet */
		if (nPatNet == 69) patNet.setAttribute("title", "nice");
		else patNet.setAttribute("title", "Patrimoni net");
		patNet.style.backgroundColor = "#f1c40f";
		patNet.innerHTML = nPatNet + "%";
		patNet.style.height = nPatNet * sz + "px";
		patNet.style.width = 75 * sz + "px";
		patNet.style.lineHeight = nPatNet * sz + "px";

		/* pasNoCorrent */
		if (nPasNoCorrent == 69) pasNoCorrent.setAttribute("title", "nice");
		else pasNoCorrent.setAttribute("title", "Pasiu no corrent");
		pasNoCorrent.style.backgroundColor = "#3498db";
		pasNoCorrent.innerHTML = nPasNoCorrent + "%";
		pasNoCorrent.style.height = nPasNoCorrent * sz + "px";
		pasNoCorrent.style.width = 75 * sz + "px";
		pasNoCorrent.style.lineHeight = nPasNoCorrent * sz + "px";

		/* pasCorrent */
		if (nPasCorrent == 69) pasCorrent.setAttribute("title", "nice");
		else pasCorrent.setAttribute("title", "Passiu corrent");
		pasCorrent.style.backgroundColor = "#f39c12";
		pasCorrent.innerHTML = nPasCorrent + "%";
		pasCorrent.style.height = nPasCorrent * sz + "px";
		pasCorrent.style.width = 75 * sz + "px";
		pasCorrent.style.lineHeight = nPasCorrent * sz + "px";

		var selects =  document.getElementsByClassName("chart");
			for(var i = 0; i < selects.length; i++) {
		    selects[i].style.fontSize = "2vw";
		    selects[i].style.fontFamily = "Alcubierre";
		    selects[i].style.transition = "1s";
		} 

	}

	function search(ele) {
		alert(ele.value);        
	}

	function calcTotalSum()
	{
		if(event.key === 'Enter') {
			totalSumAct();
			totalSumPas();
		}
	}

	function calcComptResult() {
		if(event.key === 'Enter')
			comptResult();
	}

	function comptResult()
	{
		let cr0 = parseFloat(document.getElementById("cr0").value);
		if (isNaN(cr0)) 
		{
			cr0 = 0;
			document.getElementById("cr0").value = "0";
		}
		let cr1 = parseFloat(document.getElementById("cr1").value)
		if (isNaN(cr1)) 
		{
			cr1 = 0;
			document.getElementById("cr1").value = "0";
		}
		let cr2 = parseFloat(document.getElementById("cr2").value);
		if (isNaN(cr2)) 
		{
			cr2 = 0;
			document.getElementById("cr2").value = "0";
		}
		let cr3 = parseFloat(document.getElementById("cr3").value);
		if (isNaN(cr3)) 
		{
			cr3 = 0;
			document.getElementById("cr3").value = "0";
		}
		let cr4 = parseFloat(document.getElementById("cr4").value);
		if (isNaN(cr4)) 
		{
			cr4 = 0;
			document.getElementById("cr4").value = "0";
		}
		let r0 = Number((cr0 - cr1).toFixed(2));
		let r1 = Number((r0 - cr2).toFixed(2));
		let r2 = Number((r1 - cr3).toFixed(2));
		let r3 = Number((r2 - cr4).toFixed(2));

		document.getElementById("MB").innerHTML = (r0).toString();
		document.getElementById("BAII").innerHTML = (r1).toString();
		document.getElementById("BAI").innerHTML = (r2).toString();
		document.getElementById("BN").innerHTML = (r3).toString();


		/* Charts */

		let pc0, pc1, pc2, pc3, pc4;

		if (cr0 == 0)
		{
			pc0 = 50;
			pc1 = 25;
			pc2 = 12.5;
			pc3 = 6.25;
			pc4 = 6.25;
		}
		else
		{
			pc0 = (cr1 / cr0 * 100).toFixed(2);
			pc1 = (cr2 / cr0 * 100).toFixed(2);
			pc2 = (cr3 / cr0 * 100).toFixed(2);
			pc3 = (cr4 / cr0 * 100).toFixed(2);
			pc4 = (r3 / cr0 * 100).toFixed(2);
		
			document.getElementById("percMB").innerHTML = Number((r0 / cr0 * 100).toFixed(2)).toString();
			document.getElementById("percBAII").innerHTML = Number((r1 / cr0 * 100).toFixed(2)).toString();
			document.getElementById("percBAI").innerHTML = Number((r2 / cr0 * 100).toFixed(2)).toString();

		}
		document.getElementById("percV").innerHTML = "100";
		document.getElementById("percCV").innerHTML = Number(pc0).toString();
		document.getElementById("percCF").innerHTML = Number(pc1).toString();
		document.getElementById("percDF").innerHTML = Number(pc2).toString();
		document.getElementById("percIS").innerHTML = Number(pc3).toString();
		document.getElementById("percBN").innerHTML = Number(pc4).toString();
		
		let szY = 6;
		let szX = 4.5;

		/* Costos de vendes */
		if (Number(pc0) == 69) chartCV.setAttribute("title", "nice");
		else chartCV.setAttribute("title", "Costos de vendes");
		chartCV.style.backgroundColor = "#1e3799";
		chartCV.innerHTML = Number(pc0) + "%";
		chartCV.style.height = pc0 * szY + "px";
		chartCV.style.width = 75 * szX + "px";
		chartCV.style.lineHeight = pc0 * szY + "px";

		/* Costos fixos */
		if (Number(pc1) == 69) chartCF.setAttribute("title", "nice");
		else chartCF.setAttribute("title", "Costos fixos");
		chartCF.style.backgroundColor = "#4a69bd";
		chartCF.innerHTML = Number(pc1) + "%";
		chartCF.style.height = pc1 * szY + "px";
		chartCF.style.width = 75 * szX + "px";
		chartCF.style.lineHeight = pc1 * szY + "px";

		/* Despeses financieres */
		if (Number(pc2) == 69) chartDF.setAttribute("title", "nice");
		else chartDF.setAttribute("title", "Despeses financeres");
		chartDF.style.backgroundColor = "#6a89cc";
		chartDF.innerHTML = Number(pc2) + "%";
		chartDF.style.height = pc2 * szY + "px";
		chartDF.style.width = 75 * szX + "px";
		chartDF.style.lineHeight = pc2 * szY + "px";

		/* Impostos */
		if (Number(pc3) == 69) chartIS.setAttribute("title", "nice");
		else chartIS.setAttribute("title", "Impostos");
		chartIS.style.backgroundColor = "#60a3bc";
		chartIS.innerHTML = Number(pc3) + "%";
		chartIS.style.height = pc3 * szY + "px";
		chartIS.style.width = 75 * szX + "px";
		chartIS.style.lineHeight = pc3 * szY + "px";

		/* Benefici net */
		if (Number(pc4) == 69) chartBN.setAttribute("title", "nice");
		else chartBN.setAttribute("title", "Benefici net");
		chartBN.style.backgroundColor = "#7d5fff";
		chartBN.innerHTML = Number(pc4) + "%";
		chartBN.style.height = pc4 * szY + "px";
		chartBN.style.width = 75 * szX + "px";
		chartBN.style.lineHeight = pc4 * szY + "px";




		document.getElementById("DV").innerHTML = "<b>Despeses variables: </b>" + Number(pc0) + "%";
		document.getElementById("DFix").innerHTML = "<b>Despeses fixes: </b>" + Number(pc1) + "%";
		document.getElementById("DP").innerHTML = "<b>Despeses de personal: </b>" + Number(parseFloat(document.getElementById("sc0").value) / cr0 * 100).toFixed(2) + "%";
		document.getElementById("DT").innerHTML = "<b>Despeses de tributs: </b>" + Number(parseFloat(document.getElementById("sc1").value) / cr0 * 100).toFixed(2) + "%";
		document.getElementById("DFin").innerHTML = "<b>Despeses financeres: </b>" + Number(pc2) + "%";
		document.getElementById("DSSE").innerHTML = "<b>Despeses de subministraments i serveis externs: </b>" + Number(pc3) + "%";

		console.log("pc1: ", pc1);
		console.log("pc0: ", pc0);
		console.log("cr0: ", cr0);
		document.getElementById("PE").innerHTML = "<b>Punt d'equilibri: </b>" + Number((cr2 / ( 1 - (cr1 / cr0))).toFixed(2));
	}	

	function currency()
	{
		return actCurrency;
	}

	function totalSumPas()
	{
		let total = 0;
		var pa = [3];
		for (var i = 0; i < 3; ++i) {
			pa[i] = parseFloat(document.getElementById("pa" + i).value);
			if (isNaN(pa[i]))
			{
				document.getElementById("pa" + i).value = "0";
				pa[i] = 0;
			}
			total += pa[i];
		}

		document.getElementById("totalPa").innerHTML = total.toString();

		if (total == 0) {
			document.getElementById("percP0").innerHTML = "33.33";
			document.getElementById("percP1").innerHTML = "33.33";
			document.getElementById("percP2").innerHTML = "33.33";
		}

		else
		{
			document.getElementById("percP0").innerHTML = (pa[0] * 100 / total).toFixed(2).toString();
			document.getElementById("percP1").innerHTML = (pa[1] * 100 / total).toFixed(2).toString();
			document.getElementById("percP2").innerHTML = (pa[2] * 100 / total).toFixed(2).toString();
		}
		percent();
		ratioCalc();

		if (total != parseFloat(document.getElementById("totalAc").innerHTML))
		{
			document.getElementById("totalPa").style.backgroundColor = "#c0392b";
			document.getElementById("totalAc").style.backgroundColor = "#c0392b";
		}
		else
		{
			document.getElementById("totalPa").style.backgroundColor = "transparent";				
			document.getElementById("totalAc").style.backgroundColor = "transparent";
		}

	}

	function totalSumAct()
	{
		let total = 0;
		var ac = [4];
		for (var i = 0; i < 4; ++i) {
			ac[i] = parseFloat(document.getElementById("ac" + i).value);
			if (isNaN(ac[i]))
			{
				document.getElementById("ac" + i).value = "0";
				ac[i] = 0;
			}
			total += ac[i]
		}
		document.getElementById("totalAc").innerHTML = total.toString();
		if (total == 0) {
			document.getElementById("percA0").innerHTML = "50.00";
			document.getElementById("percA1").innerHTML = "16.67";
			document.getElementById("percA2").innerHTML = "16.67";
			document.getElementById("percA3").innerHTML = "16.67";
		}

		else
		{
			document.getElementById("percA0").innerHTML = (ac[0] * 100 / total).toFixed(2).toString();
			document.getElementById("percA1").innerHTML = (ac[1] * 100 / total).toFixed(2).toString();
			document.getElementById("percA2").innerHTML = (ac[2] * 100 / total).toFixed(2).toString();
			document.getElementById("percA3").innerHTML = (ac[3] * 100 / total).toFixed(2).toString();
		}
		percent();
		ratioCalc();

		if (total != parseFloat(document.getElementById("totalPa").innerHTML))
		{
			document.getElementById("totalAc").style.backgroundColor = "#c0392b";
			document.getElementById("totalPa").style.backgroundColor = "#c0392b";
		}
		else
		{
			document.getElementById("totalAc").style.backgroundColor = "transparent";
			document.getElementById("totalPa").style.backgroundColor = "transparent";				
		}

	}
	function changeCurr(curr) {
		var aux = document.getElementById("currBtn").innerHTML;
		setCurr(curr.innerHTML);
		curr.innerHTML = aux;
	}

	function setCurr (currValue)
	{
		var curr = document.getElementsByClassName("curr");
		for (var i = 0; i < curr.length; i++) {
			curr[i].innerHTML = currValue;
		}
	}

	function pickCurr () 
	{
		var btn = document.getElementById("currBtn");
		var menu = document.getElementById("currMenu");
		btn.toggleAttribute("open");
		if (btn.hasAttribute("open"))
		{
			menu.style.height = "20vw";
		}
		else
		{			
			menu.style.height = "0vw";
		}

	}

	window.onload = () => {
		totalSumPas();	
		totalSumAct();
		comptResult();
		setCurr("€");
		document.getElementById("currMenuBtn0").innerHTML = "$";
		document.getElementById("currMenuBtn1").innerHTML = "£";
		document.getElementById("currMenuBtn2").innerHTML = "¥";
		document.getElementById("currMenuBtn4").innerHTML = "Fr";
		document.getElementById("currMenuBtn5").innerHTML = "₹";

	}

	var indMsg = 'indeterminació matemàtica.';
	function ratioCalc()
	{
		let pa0 = parseFloat(document.getElementById("pa0").value);
		let pa1 = parseFloat(document.getElementById("pa1").value);
		let pa2 = parseFloat(document.getElementById("pa2").value);
		let ac = parseFloat(document.getElementById("ac1").value) + parseFloat(document.getElementById("ac2").value) + parseFloat(document.getElementById("ac3").value);
		let cl = parseFloat(document.getElementById("fc0").value);
		let pr = parseFloat(document.getElementById("fc1").value);
		let vb = parseFloat(document.getElementById("fc2").value);
		let cb = parseFloat(document.getElementById("fc3").value);

		document.getElementById("RE").innerHTML = '<b>Ràtio endeutament: </b>';
		if (pa0 + pa1 + pa2 == 0)
		{
			if (pa1 + pa2 != 0)
				document.getElementById("RE").innerHTML += '&#8734; &#8211; L\'empresa està literalment morta.';
			else
				document.getElementById("RE").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("RE").innerHTML += ((pa1 + pa2) / (pa0 + pa1 + pa2)).toFixed(2);
			if (((pa1 + pa2) / (pa0 + pa1 + pa2)).toFixed(2) > 0.6) document.getElementById("RE").innerHTML += " &#8211; L'empresa té molts deutes";
			else if (((pa1 + pa2) / (pa0 + pa1 + pa2)).toFixed(2) == 0.6) document.getElementById("RE").innerHTML += " &#8211; L'empresa està bé";
			else if (((pa1 + pa2) / (pa0 + pa1 + pa2)).toFixed(2) < 0.6) 
			{
				if (((pa1 + pa2) / (pa0 + pa1 + pa2)).toFixed(2) == 0) document.getElementById("RE").innerHTML += " &#8211; L'empresa no deu res de res!";
				else document.getElementById("RE").innerHTML += " &#8211; L'empresa va molt bé respecte els deutes.";
			}
		}

		document.getElementById("RQD").innerHTML = '<b>Ràtio de qualitat del deute: </b>';
		if (pa1 + pa2 == 0) 
		{
			document.getElementById("RQD").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("RQD").innerHTML += (pa2 / (pa1 + pa2)).toFixed(2);
			if ((pa2 / (pa1 + pa2)).toFixed(2) <= 0.5) document.getElementById("RQD").innerHTML += " &#8211; L'empresa té temps per pagar els seus deutes."
			else if ((pa2 / (pa1 + pa2)).toFixed(2) > 0.5)
			{
				if ((pa2 / (pa1 + pa2)).toFixed(2) > 0.95) document.getElementById("RQD").innerHTML += " &#8211; L'empresa ha de pagar els seus deutes inmediatament."
				else document.getElementById("RQD").innerHTML += " &#8211; L'empresa no té molt temps per pagar els seus deutes."
			}
		}

		document.getElementById("RL").innerHTML = '<b>Ràtio de liquiditat: </b>';
		if (pa2 == 0)
		{
			if (ac != 0)
				document.getElementById("RL").innerHTML += '&#8734; &#8211; L\'empresa és literalment propietaria de tot l\'univers.';
			else
				document.getElementById("RL").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("RL").innerHTML += (ac / pa2).toFixed(2);
			
			if ((ac / pa2).toFixed(2) < 1) document.getElementById("RL").innerHTML += " &#8211; L'empresa té problemes de liquidació."
			if ((ac / pa2).toFixed(2) > 1)
			{
				if ((ac / pa2).toFixed(2) > 2.5) document.getElementById("RL").innerHTML += " &#8211; L'empresa té un excés de recursos actius que afectarà al a rentabilitat."
				else document.getElementById("RL").innerHTML += " &#8211; L'empresa està liquidant satifactoriament."
			}
			else if (Number((ac / pa2).toFixed(2)) == 1.00)document.getElementById("RL").innerHTML += " &#8211; L'empresa està correctament."
		}

		document.getElementById("FM").innerHTML = '<b>Fons de maniobra: </b>' + (ac - pa2);
		if (ac - pa2 < 0) document.getElementById("FM").innerHTML += " &#8211; L'empresa està en una mala situació, té problemes per pagar els deutes.";
		else if (ac - pa2 > 0) document.getElementById("FM").innerHTML += " &#8211; L'empresa està en una situació de solvència financera segura.";
		else document.getElementById("FM").innerHTML += " &#8211; L'empresa està en una situació de risc, dèpen dels seus clients per pagar els deutes.";


		document.getElementById("TMC").innerHTML = '<b>Termini mitjà de cobrament:</b> ';
		if (vb == 0)
		{
			if (cl != 0)
				document.getElementById("TMC").innerHTML += '&#8734; &#8211; L\'empresa no cobrarà mai! D:';
			else
				document.getElementById("TMC").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("TMC").innerHTML += Math.round((cl / vb) * 365) + " dies.";
			if (cl == 0) document.getElementById("TMC").innerHTML += " &#8211; L'empresa cobrarà tots el dies! :D";
		}

		document.getElementById("TMP").innerHTML = '<b>Termini mitjà de pagament:</b> ';
		if (cb == 0)
		{
			if (pr != 0)
				document.getElementById("TMP").innerHTML += '&#8734; &#8211; L\'empresa no pagrà mai! :D';
			else
				document.getElementById("TMP").innerHTML += indMsg;
		}
		else
		{
			document.getElementById("TMP").innerHTML += Math.round((pr / cb) * 365) + " dies.";
			if (cb.toFixed(2) == 0) document.getElementById("TMP").innerHTML += " &#8211; L'empresa pagarà tots el dies! D:";
			if (Math.round((pr / cb) * 365) > Math.round((vb / cl) * 365))
				document.getElementById("COMM").innerHTML = "Problema.";
			else
				document.getElementById("COMM").innerHTML = "Correcte.";
		}
	}

	function calcDesp() {


	}