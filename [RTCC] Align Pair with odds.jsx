//@include "/Applications/Adobe Photoshop CC 2017/Presets/Scripts/SelectedLayers.jsx"

var selectedLayers = getSelectedLayers(app.activeDocument);
var first = selectedLayers[0];  
var placeholders = selectedLayers.slice(1);
var docRef = activeDocument;
var layersSelected = "";
var layerindex = 1;
var pairs = [];
var odds = [];

function definePairsandOdds(){
    for (i = 0; i < selectedLayers.length; i++){
        if ((i+2)%2==0) {
            pairs.push(selectedLayers[i]);
        }
        else {
            odds.push(selectedLayers[i]);
        }
    }
}

function alignPairwithOdds(){ 

    for (i = 0; i < pairs.length; i++){
 
        //define 
        docRef.activeLayer = pairs[i];
        //seleciona 
        makeselection();
        //define 
        docRef.activeLayer = odds[i];
        //alinea la par con la impar de base
        alignLayers();
        //deselecciona
        unSelect();
    }

}

definePairsandOdds();

app.activeDocument.suspendHistory("Align Pair with Odds", "alignPairwithOdds();" );



function makeselection(){
    var idsetd = charIDToTypeID( "setd" );
    var desc298 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref194 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref194.putProperty( idChnl, idfsel );
    desc298.putReference( idnull, ref194 );
    var idT = charIDToTypeID( "T   " );
    var ref195 = new ActionReference();
    var idPath = charIDToTypeID( "Path" );
    var idPath = charIDToTypeID( "Path" );
    var idvectorMask = stringIDToTypeID( "vectorMask" );
    ref195.putEnumerated( idPath, idPath, idvectorMask );
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref195.putEnumerated( idLyr, idOrdn, idTrgt );
    desc298.putReference( idT, ref195 );
    var idVrsn = charIDToTypeID( "Vrsn" );
    desc298.putInteger( idVrsn, 1 );
    var idvectorMaskParams = stringIDToTypeID( "vectorMaskParams" );
    desc298.putBoolean( idvectorMaskParams, true );
    executeAction( idsetd, desc298, DialogModes.NO );
}

function alignLayers(){
	var idAlgn = charIDToTypeID( "Algn" );
    var desc106 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref74 = new ActionReference();
    var idLyr = charIDToTypeID( "Lyr " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idTrgt = charIDToTypeID( "Trgt" );
    ref74.putEnumerated( idLyr, idOrdn, idTrgt );
    desc106.putReference( idnull, ref74 );
    var idUsng = charIDToTypeID( "Usng" );
    var idADSt = charIDToTypeID( "ADSt" );
    var idAdCV = charIDToTypeID( "AdCV" );
    desc106.putEnumerated( idUsng, idADSt, idAdCV );
    executeAction( idAlgn, desc106, DialogModes.NO );
}

function unSelect(){
	var idsetd = charIDToTypeID( "setd" );
    var desc567 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref360 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idfsel = charIDToTypeID( "fsel" );
    ref360.putProperty( idChnl, idfsel );
    desc567.putReference( idnull, ref360 );
    var idT = charIDToTypeID( "T   " );
    var idOrdn = charIDToTypeID( "Ordn" );
    var idNone = charIDToTypeID( "None" );
    desc567.putEnumerated( idT, idOrdn, idNone );
    executeAction( idsetd, desc567, DialogModes.NO );
}

