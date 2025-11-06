import { FIGURE_LIST } from './constants';

const kausajiData: string[] = [
  // Gida 1
  `1. Mutun yana cikin matsalolin rayuwa alokacin\n2. Yasa wata bukata agabanshi amma har yanzun bukatan bata biyaba\n3. Yasa burace burace agabansa masu yawa\n4. Allah zaiwa mutun jama’a arayuwansa\n5. Yana jiran wani alkawari da akaimasa`,
  // Gida 2
  `1. Mutun zaiyi bako bada dadewaba in sha allahu\n2. Zaka sulhunta wasu akan wata fitina\n3. Mutun yana cikin bukatan kudi masu yawa\n4. Anabin mutun bashi baibiyaba kuma abin yana damunsa\n5. Kasa abinka akasuwa ko zakasa`,
  // Gida 3
  `1. Kana famada marar lafiya makusanci\n2. Yan’uwanka basa taimakonka sunkyaleka\n3. Nawuin dangi zaidawo kanka ko yadawo\n4. Akwai mutuminda kuke rigima dashi sosai\n5. Akwai rashin hadinkai a familinka sosai`,
  // Gida 4
  `1. Haduwada manyan mutane masu mulki\n2. Mutum baya tareda iyayensa waje daya\n3. Mutun yasa wata doguwar tafiya agabanshi\n4. Mutun yasamu albarkan iyayenshi sosai\n5. Mutun zaisamu daukaka da girma arayuwa`,
  // Gida 5
  `1. Bukatun mutun zasu biya awannan lokacin\n2. Mutun zaihaifi yah mace ko ya Haifa\n3. Zaishiga cikin farinciki da annashuwa sosai\n4. Zaisamu kudade wajan iyayen gidanshi\n5. Mutun zaise sabuwar waya ko zai chanza`,
  // Gida 6
  `1. Mutun yana cikin kunci da damuwa\n2. Yana famada mura da zazzabi da ciwon kai\n3. Yanemi aure bai samuba yanakan nema\n4. Yana cikin fargaba da tsoro da wasiwasi\n5. Akwai wata yar’uwa da take sonshi sosai`,
  // Gida 7
  `1. Mutun yana sha’awar yin aure\n2. Zaisamu mukami da matsayi mai girma\n3. Akwai abinda yakeso anata rigima akansa\n4. Abokan harka suna wahalarda mutun\n5. Mutun zaiyi mata biyu arayuwanda`,
  // Gida 8
  `1. Fita daga cikin masifa da bala’i da tashin hankali\n2. Samun labarin mutuwa ko hatsari ko asara\n3. Mutun yasa tafiya agabanshi taki yuwa\n4. Mutun zaiyi baki daga nesa zasuzo dyawa\n5. Za’aiwa mutun rashin gaskiya ko ammasa`,
  // Gida 9
  `1. Akwai tafiya agaban mutun ko yasani ko baisaniba\n2. Mutun zaiyi asaran wasu kudade masu yawa\n3. Kafan mutun yanamar ciwo za,abatamar rai\n5. Anawa mutun alkawari ana sabawa`,
  // Gida 10
  `1. Mutun zai mallaki kadarori a rayuwansa\n2. Mutun zai samu jagoroncin jama’a\n3. Mutun zai samu girma da daukaka wajan mutane\n4. Iyayen mutun manyan mutanene agarinsu\n5. Komawar yar’uwansa dakin mijinta in sha allahu`,
  // Gida 11
  `1. Harkokin mutun sun tsaya chak\n2. Mutun yasa bukatoci dayawa agaba sunyi nauyi\n3. Mutun wayayyene akan harkansa in sha allah\n4. Ana masa munafurci da hassada a’inda yake\n5. Surutu da hayaniya sunyi yawa akan mutun`,
  // Gida 12
  `1. Makiya suntasowa mutun yayi dafa’i\n2. Mutun yanajin fitsari ko kashi\n3. Mutun yashafa mai ko turare ko zai shafa\n4. Mutun yana shirya abubuwa suna watsewa\n5. Akoi abinda mutun yakeso yayi yana tsoro`,
  // Gida 13
  `1. Mutun yanada asali ainda yake kwarai kuwa\n2. Mutun zai gina muhalli kafin yabar duniya\n3. Mutun zaiyi zuri’a sosai arayuwansa\n4. Zakasha makiya arayuwanka amma basuda nasara\n5. Mutun zaiyi mata dayawa arayuwansa`,
  // Gida 14
  `1. Mutun zai fita wani garin insha allahu\n2. Zai samu farin jinin mata arayuwanshi\n3. Mutun dan gatane azuri’arsu sosai\n4. Yanasa harkoki agaba basa yuwa alokacin\n5. Mutun shine na farko ko nakarshi wajan uwa`,
  // Gida 15
  `Bisa ka'idar Ramli, Kausaji baya sauka a Gida na 15 saboda jimillar dugonsa biyar ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
  // Gida 16
  `1. Mutun zaiyi tsawon rayuwa aduniya\n2. Mutunzaiyi doguwar tafiya tabarin kasa\n3. Mutun zaiyi hulda da kabilun mutane\n4. Mutun zaiyi gwagwarmaya sosai da mutane\n5. Mutane zasuna yaudaran mutun suna ha’intarsa sunamar rashin gaskiya`,
];

const rahikaData: string[] = [
    // Gida 1
    `1. Mutun yasa wata bukata agaba taki biya\n2. Mutun yana bukatan kudade masu yawa\n3. Mutun yayi gyaran fuska ko yayi aski ko dai gashi yazuba masa\n4. Yana cikin damuwa da firgici da tsoro kan wani abu\n5. Zai channza waya ko wata na’ura agidanshi`,
    // Gida 2
    `1. Mutun yatara wasu kudade bayason kashesu\n2. Ammasa alkawari ba’acikaba\n3. Ransa yana yawan baci haka kurun\n4. Mutane suna jin dadin mu’amala dashi\n5. Zaiyi chefane agidanshi ko yayi in sha allahu`,
    // Gida 3
    `1. Mutun zainemi bashin kudi ko za’anema awajansa\n2. Mutun zaici nama ko tsire ko yaci\n3. Kudaden mutun sun makale haryanzun basu fitaba\n4. Mutun yanada kaifin haddace abu\n5. Mutun bazai mutuba sai burinshi yacika in sha allah`,
    // Gida 4
    `1. Iyayen mutun zasu mutu duka yayi gadonsu\n2. Rashin lafiyan mahaifi ko mahaifiya\n3. Mutun yanason siyan fili ko gida ko gona\n4. Ankulla harka ta lalace, ana girmamaka\n5. Matanka suna baka matsala ko abokanzama`,
    // Gida 5
    `1. Zaka Haifa ya mace arayuwarka ta duniya\n2. Zaka warke daga rashin lafiyarda take damunka\n3. Wata daga cikin dangi tana sonka ko kaidinne kake son wata daga dangi\n4. Zaka dinka sabbin kaya ko kasiya takalmi\n5. Zaka biya kudin makaranta ko biyan bashi`,
    // Gida 6
    `1. Bukatunka zasu biya, zakase magani\n2. Za’aima sata ko kaji labarin anyi sata\n3. Zakai gyaran gida ko karin mata\n4. Kata kiran wani baka sameshiba\n5. Kana samun addu’a wajan iyaye`,
    // Gida 7
    `1. Haduwa da asarori da makalewan kudi\n2. Rikici ko sabani da wandda ake tare dashi\n3. Siyan kayan aure ko kashe kudi akan aure\n4. Mutun yayi wani abu amma abin yadameshi\n5. Mutun yasa burace burace masu yawa arayuwanshi`,
    // Gida 8
    `1. Kana nema amma cikin wahala sosai\n2. Mutun yana sakaci da addu’a gaskiya\n3. Za’akai sadakin aure dakai ko za’akawo\n4. Za’ai gobara kusa dakai kaji labari\n5. Mutuwan wani babban mutun ko mai mulki`,
    // Gida 9
    `1. Za’asaki wata mace takusa dakai\n2. Tafiya zatasameka bagtatan lokaci daya\n3. Tolet dinka yacika ko bangon gidanka yatsage\n4. Zakai shari’a da wani agaban mahukunta\n5. Mata basu jituwa, samun mutun yana raguwa`,
    // Gida 10
    `1. Wani mai mulki zai mutu adauraka kan muliki\n2. Wani dan uwanka yayi hatsari ko zaiyi\n3. Bakin iska yana batama harkokinka\n4. Andamfareka ko za’adamfareka ko zakai asara\n5. Inkana kiwo dabban zatamutun ko asace`,
    // Gida 11
    `1. Kana bukatan kudade masu yawa\n2. Za’aima wanki da gugan kayanka\n3. Zakasha wani abu mai zaki ruwa\n4. Itacen girki zaikare ko yakare, mura nadamunka\n5. Zakai hayaniya da wani akan kudi`,
    // Gida 12
    `1. Mutane sunama kallon mai kudi sosai\n2. Dayawan mutane suna sonkane abaki badan allahba\n3. Akoi matanda take sonka da fasikanci\n4. Sha’awa zatarinka damun mutun\n5. Akoi abinda mutun yakeson siya`,
    // Gida 13
    `1. Za’atambayeka bashin kudi ko kyeuta\n2. Mutane zasu rikema kudade ama’amalanka\n3. Za’aturama kudi ta akaunt ko hannu da hannu\n4. Mutun zaimallaki abubuwa dayawa arayuwa\n5. Nawyin dangi da yan’uwa zaidawo kanka ko yadawo`,
    // Gida 14
    `1. Mutun zaisami tarin masoya arayuwanshi\n2. Ba’aiya zagin mutun agabansa sai abayan idonsa\n3. Mutun yanaso yaseda wani kadaranshi\n4. Mutun yanada zuwa banki agabanshi in sha allah\n5. Duk abinda mutun zaiyi sai yayi lissafinshi`,
    // Gida 15
    `Bisa ka'idar Ramli, Rahika baya sauka a Gida na 15 saboda jimillar dugonsa bakwai ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Mutun zai fita daga cikin damuwa\n2. Mutun zaiyi baiwa arayuwansa ta duniya\n3. Mutun zai samu zuwa aikin hajji arayuwanshi\n4. Za’aturawa mutun sako daga nesa\n5. Antaba yiwa mutun tiyata ko za’aimasa`,
];

const rayyaData: string[] = [
    // Gida 1
    `1. Mutun yana cikin hali mai kyeu a wannan lokaci\n2. Mutun yana fama da wasu jinyace jinyace\n3. Mutun yana yawan saka abu agaba amma yana jinkiri\n4. Burin mutun zai cika akusa yayi sadakan kaza\n5. Mutane sunajin dadin mu’amala dakai`,
    // Gida 2
    `1. Mutun zai samu macce mai kyauwun hali\n2. Za’ahadaka da wata macce a danginku\n3. Za’akawoma sako har gida kuma zakai farinciki\n4. Zaku dade kuna soyayya da wata mace\n5. Za’akawoma faran takadda kuma zakai farinciki`,
    // Gida 3
    `1. Mutun zai shiga cikin sunguloli sosai awannan lokaci\n2. Mtun yana cikin aminci da zaman lafiya da nasarori\n3. Mutun yana aikata aiyuka na alkairi da albarka\n4. Mutun zaije mitin ko taron addini in sha allah\n5. Mutun zaiyi soyayya mai dadikwarai da gaske`,
    // Gida 4
    `1. Za’aiwa mutun nasiha ko fada ko wa’azi\n2. Adaidai wannan lokaci akoi kudi a jikin mutun\n3. Akoi aikin gini ko gona amma antsaidashi\n4. Kokuma mutun yasa gidansa ko filinsa akasuwa\n5. Mutun yana aikata wani laifi aboye`,
    // Gida 5
    `1. Mutun yana cikin zaman lafiya da yan’uwansa\n2. Akoi wani hidima da mutun yakeson yiwa iyayensa\n3. Akoi sakonda mutun yake jira awannan lokacin\n4. Mutun zai kashewa kansa kudi kwarai\n5. Mutun zai samu yayah masu albarka`,
    // Gida 6
    `1. Akoi mai suna Fatima ko zainab ko aisha da take sonka\n2. Zazzabi da mura da zafin jiki suna damunka\n3. Mutun baya tare waje daya da iyayensa\n4. Mutun yataba shirya aure sannan auren yalalace\n5. Mutun yana cikin wata damuwa yarasa yadda zaiyi`,
    // Gida 7
    `1. Mutun zaiyi aure mai kyeu arayuwansa\n2. Akoi wata mace adangi da take gaba dakai\n3. Mutun yanada farinjinin mata kwarai kuwa\n4. Mutun yanason kwalliya da tsafta sannan dan birni\n5. Za’abawa mutun mace adanginsu saidai yakita`,
    // Gida 8
    `1. Akoi macenda mutun yakeso amma sunbata\n2. Basir yana damun mutun kwarai\n3. Mutun yataba zama awani gari sannan yabar garin\n4. Mutun yataba siyan wani abu rikici yashigo ciki\n5. Wani babban mutun yana fada dakai`,
    // Gida 9
    `1. Akoi maganar aure agaban mutun ko\n2. abokinsa ko dan’uwansa kodai na wani nasa\n3. Mutun zaiyi baakin mata guda biyu agidanshi\n4. Ana munafurtan mutun a’inda yake\n5. Mutun yanata tinani yacanza harka`,
    // Gida 10
    `1. Yan’uwa da abokan arziki zasu soka\n2. Zakasamu daukaka cikin abokan harka\n3. Akoi abinda akaiwa mutun da yake tunani\n4. Sai yarama abinda akai masa kwarai kuwa\n5. Mutun zaiyi hayaniya ko chachan baki dawasu`,
    // Gida 11
    `1. Mutun yana shan maganin gargajiya kona buture\n2. Akoi abinda mutun yamallaka daga baya yarasashi gaba daya ko fili ko gona\n3. Akoi maganar chanjin wurin zama\n4. Kakannin mutun sun mutu gaba dayansu\n5. Bukatun mutun basa biya kan lokaci`,
    // Gida 12
    `1. Mutane zasu ringa ganin girmanka\n2. Za’asaki wata macce cikin yan’uwanka\n3. Akoi matarda kakeso kataimakawa\n4. Za’asamu sarki ko mai mulki a danginku\n5. Allah zai mallakama mutane a karkashinka`,
    // Gida 13
    `1. Yan’uwanka da danginka sunajin dadin zama dakai\n2. Burinka zaicika kaci gaba da addu’a da sadaka\n3. Zakai mu’amala da manyan mutane sosai\n4. Zakai wani aboki zaku kaunaci juna sosai\n5. Kataba kiwo ko zakai nangaba in sha allahu`,
    // Gida 14
    `1. Yan’uwanka sunama hassada da kiyayyah\n2. Akoi abinda kakeso kayi amma kana jin tsoron yinsa\n3. Jini zai zuba ajikinka ko waninka\n4. Wata macce zataci amanarka ko tayaudareka\n5. Kataba soyayya abaya amma ka wahalaa`,
    // Gida 15
    `Bisa ka'idar Ramli, Rayya baya sauka a Gida na 15 saboda jimillar dugonsa biyar ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Mutun zaiyi kyakkyewan karshe\n2. Mutun zai samu chanjin yanayi mai kyeu\n3. Akai soyayya da aka dade anayi wanda ba’arabuba\n4. Mutun zai samu taimakon allah sosai kuwa\n5. Bukata tayi nauyi amma zata biya`,
];

const bayadaData: string[] = [
    // Gida 1
    `1. Mutun yana cikin kyak,kyawan yanayi awannan lokici\n2. Yana yawan sah abu agaba amma bayayiyuwa\n3. Mutun yasamu soyay,yan iyaye sah\n4. akwai maganan tafiya dogowa agabansa\n5. Mutun yashiga sungullah mai yawa ko zai shiga`,
    // Gida 2
    `1. Mutun zai samu kudi na halak nashi\n2. Mutun ya, ajiye wasu kudi kadan bayason tabawa\n3. Za,a’ kawowa mutun kudi abakar leda hargida\n4. Mutun zaiyi kashe,kashen kudi awannan lokacin\n5. Za’a, bawa mutun shugabanci,a’ inda yake`,
    // Gida 3
    `1. Mutun yayi nisada iyeyansa , awannan lokaci\n2. Mutun yataba shari,a dawani ko wata arayuwansa\n3. Akwai nau,in karatu da mutun yakeson yakoya\n4. Mutun zai, ziyarci wani malami kozai ziyarta\n5. Makub,cinka bashida lafiya zakaje kadubashi`,
    // Gida 4
    `1. Gado daukaka da biyay,yah da arziki wajan iyaye\n2. Zaman lafiya da iyaye da samun adu,arsu\n3. Bukatocin mutun zasu biya ayi sadakan goro\n4. Mutun zai samu labarin haihuwar yah mace\n5. Mutun yana aikin gini ko zai fara insha allah`,
    // Gida 5
    `1. Mutun yamatsu yakarbi wasu kudadensah\n2. Mutun zaise abinci agidansa ko yasiyah\n3. Mutun yasha lemo ko kankana ko rakey\n4. Mutun zai samu yayah masu albarkar arayuwansa\n5. Mahifin mutun yayi rayuwan damata biyu ko uku`,
    // Gida 6
    `1. Dan,uwah ko yar,uwah babu lafiyah\n2. Rashin lafiyan iyaye uwah ko ubah\n3. Iyayanka basa taredakai waje dayah\n4. Mutun zaise maganin gargajiya kona bature\n5. Mutun bayajin dadin zamada makob,cinshi`,
    // Gida 7
    `1. Mutun zaise abinci agidansa ko yasiyah\n2. Mutun yanajin dadin zamada iyalinsa sosai\n3. Mutun bazaibar duniyaba saiya mallaki muhalli\n4. Mata zasu ringa sonka suna bibiyarkah\n5. Sha,awah zata ringa damun mutun lokaci lokaci`,
    // Gida 8
    `1. Mutun zai samu labarin mutuwar tsohuwar mace\n2. Kaninka koh yayanka yataba,bahta koh gaba zai bahta\n3. Za,aiwa mutun Karin ruwa ko Karin jinni ajikinshi\n4. Anajidakai a familinku ko danginku\n5. Mutun yanada zurfin tunani da hangen nesah`,
    // Gida 9
    `1. Samun sabahni da iyayen gidanka akusah\n2. Ana aikin hanya ta anguwarku koh layinku\n3. Akwai rijiya a gidanku ko bohol koh a,anguwarku\n4. Za,kai tafiya dawasu manyan mutune arayuwanka\n5. Za,a’ dauki mutun wajan aiki ko samun alkairi`,
    // Gida 10
    `1. Mutane sunamaka kallon abunda bakadashi\n2. Zakasiyo naman kaza kona shano adafashi agidanka\n3. Mutun zaizamo maisun shiga ta alfarma arayuwanshi\n4. Mutun zaiyi rayuwa, akasanda bahkasanshiba\n5. Mutun zai mallaki kadarorinda baisan adadinsuba arayuwanshi`,
    // Gida 11
    `1. Mutuwar mai mulki ko mai sarauta ko kudi a indakake\n2. Akwar wata matsala tsakaninka da iyaye koh iyayengidanka\n3. zakai sabin dinkuna sannan zakazubda gashi ajikinka\n4. Akwai rigimarda akeyi a familinku akan gadoh\n5. Cikar buri da biyan bukata dasamun ingancin lafiya`,
    // Gida 12
    `1. Anawa mutun farraku da wata macey\n2. Mutun yana mafarkin mayu ko iskah\n3. Mutun zaiyi dogowar rayuwa nagaba babu iyaye\n4. Akwai wani wadda yake fada, dakai cikin yan,uwah\n5. Mutun yana famada wani ciwo da, daddy`,
    // Gida 13
    `1. Mutun yanadaga cikin manya ah yayan babanshi\n2. Mutun zaiyi hulda da hukuma a rayuwarsa\n3. Mutun yayi aure dawuri ko zaiyi aure dawuri\n4. Mutun zai binne iyayansa da hannunsah\n5. Manyan gari zasusoka zasu kaunaceka`,
    // Gida 14
    `1. Adu,ar’ mutun takarbo kai sadakah masah\n2. mutun zai haifi yara dayawa arayuwansa\n3. Mutun yasha gwagwar,maya damutane\n4. Mutun ba,a’inda kake kafara zamabah\n5. kataba noma koh kiywo ko seda filiy`,
    // Gida 15
    `Bisa ka'idar Ramli, Bayada baya sauka a Gida na 15 saboda jimillar dugonsa bakwai ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Shiga farinciki badah,dadewabah\n2. Mutune dayawa zasucigaba ta dalilinkah\n3. Sai, kakai mukaminda kaine mai fada ajih a indakake\n4. Duk sana,an’da kakekai, akarshe zaka chanza\n5. Rabuwada duniya lafiya da haduwa ,da allah lafiya`,
];

const darikiData: string[] = [
    // Gida 1
    `1. Tafiya zai kama mutun bada dadewaba akwai alkairi\n2. Mutun yana cikin shakku da wasi,wasi da kokonto\n3. Mutun yana yawan shirya abu yana rushewa\n4. Mutun zai shiga cikin zirga zirga da shige da fice sosai\n5. Akwai wata babbar bukata da mutun yasa agaba`,
    // Gida 2
    `1. Mutun yana cikin rashin kudi sosai da sosai\n2. Anabin mutun bashi shima kuma yana bin bashi\n3. Za’aturawa mutun sako koshi zaitura sakon\n4. Yan’uwansa zasuzo wajansa daga wani gari\n5. Za’a tambayeka kudin chefene ko nawani abu`,
    // Gida 3
    `1. Mutun yana samun addu’an mutane sosai\n2. Yataba neman auren budurwa ko bazawara an hanashi\n3. Akwai kudade da mutun yake tsammanin samu\n4. Mutane suna yabon mutun da kyeuta kwarai\n5. Takalminka zai tsinke ko hulanka zai jike`,
    // Gida 4
    `1. Mutun yasami gata ko kulawa ko soyayyan iyayensa\n2. Yagado alkairi da albarka da sirri wajan iyayensa\n3. Mutane suna girmamashi suna bashi matsayi\n4. Allah zai horema manyan mutane na alkairi\n5. Mutun zai mutune agarinda aka haifeshi`,
    // Gida 5
    `1. In akwai wuta a’inda kake to za’adauke in babu kuma za’a kawo\n2. Antaba yima mutun tiyata ko za’aimasa\n3. Wayan mutun yalalace ko zatalalace ko zai chanza\n4. Mutun yataba karyewa ko zai karye ko hatsarin mota\n5. Mutun zai shiga taron jama’a`,
    // Gida 6
    `1. Mutun yana fama da ciwon sanyin mara\n2. Mutun yana fama da Kankan cewan gaba\n3. Za’atuhumi mutun kan wani laifi\n4. In mutun yanada mata to tana fita bada izininsaba\n5. Akwai shari’a agaban mutun ko yayi`,
    // Gida 7
    `1. Mutun zaiyi koskwariman gidansa\n2. In mutun yanada mata to tana munafurtanshi ko wasu nasa\n3. Mutun yana yawan shiga wata damuwa kan wata bukata\n4. Akwai yayanka da bazasu rayu a hannunkaba\n5. Maranka yana bukatan aski ko hammatanka`,
    // Gida 8
    `1. Cikin matanka zai zube ko yataba zubewa\n2. Mutun baya samun gamsuwa wajan iyalinsa\n3. Mutun yana yawan mafarkai barkatai da baya ganewa\n4. Ana jifan mutun da iska ma’ana aljani kenan\n5. Ana tsabawa mutun alkawari in anmasa`,
    // Gida 9
    `1. Mutun zaije aikin hajji ko yaje\n2. Mutun zai siyowa matanshi kayan kwalliya\n3. Samun nasara da galaba akan makiya\n4. Yayanka basu rayu da kai dukaba\n5. Kana fama da wanda yadade yana jinya bai warkeba`,
    // Gida 10
    `1. Danka ko kaninka ko dan’uwanka baida lafiya\n2. Akwai wasu harkoki da zasu zoma daga nesa\n3. Kana fama da matsalan mantuwa wani lokacin\n4. Zakasha ruwa ko shayi ko kasha a lokacin\n5. Kana yawan tunanin akan matsalolinka`,
    // Gida 11
    `1. Kanada sabani dawasu cikin yan’uwanka\n2. Kabata da wani cikin abokanka nakusa\n3. Kana kan cikin wani abuh awannan lokacin\n4. Kadade kana neman wani abu to zaka samu\n5. Kana mu’amala da manyan mutane masu mulki`,
    // Gida 12
    `1. Kafito daga wanka ko zakashiga alokacin\n2. Zakashiga waje mai sanyi ko zuwa banki\n3. Wani yaro ko yarinya zata mutu a unguwanku\n4. Iyayenka suna sonka sosai da sosai\n5. Za’abatama rai ko anbatama`,
    // Gida 13
    `1. Gabanka yana faduwa ranka yana baci\n2. Kamallaki wasu abubuwa daga baya karasasu\n3. Majinyacika zai mutu bada dadewaba\n4. Ana jifanka anama mummunan tanadi\n5. Zaka tashi a inda kake ko kuma kama tashi`,
    // Gida 14
    `1. Zaka haifi dah mai matsayi ko mai mulki\n2. Kanada kanwa ko yayah bazawara akusa\n3. Ana munafurtanka a’inda kake da zama\n4. Zakai tafiye tafiye sosai arayuwanka\n5. Kasaki matanka ko zaka sakah ko mutuwar aure`,
    // Gida 15
    `1. Ana yawan sabama alkawari lokaci zuwa lokaci\n2. Kana yawan kulla abu yana warwarewa\n3. Mutane suna baka wahala arayuwarka\n4. Manyan mutane suna fada dakai a inda kake\n5. Kasala da lalaci da ciwon jiki yana damunka`,
    // Gida 16
    `1. Kana bayyana sirrinka a inda bai daceba\n2. Makiya sun tasoma katsaya da addu’a\n3. Zakabar kasanka bada dadewaba\n4. Zaku zauna mitin kan wani taro\n5. Zaka’aika sako nesa a mota ko ajirgi`,
];

const kablaKarijaData: string[] = [
    // Gida 1
    `1. Kasala da lalaci tare da ciwon jiki yana damunka\n2. Zakasamu kudi amma sai na hannunka sunkare\n3. Makiya suntasoma katsaya da addu’a sosai\n4. Bakajin dadin rayuwarka yadda kake so\n5. Akwai jinyanda take damunka tsawon lokaci`,
    // Gida 2
    `1. Kana cikin rashin kudi amma zaka samesu\n2. Za’aima biyan bashi kuma kaima zakabiya bashi\n3. Kana cikin bakin ciki da damuwa da wasiwasi\n4. Zakasiya kayan abinci agidanka ko wata hidimar\n5. Wata mace tana taimakonka kwairai kuwa`,
    // Gida 3
    `1. Kasamu matsala da wata ko wani adanginku\n2. Akwai wadda kakeso kamallaka amma baka sameshiba\n3. Rashinjin dadin zama ‘ainda kake\n4. Nawin dangi da yan’uwa zai dawo kanka\n5. Bakajin dadin zama d makwabcinka`,
    // Gida 4
    `1. Cikin manyan mutanenka akwai marar lafiya\n2. Kanajin fitsari ko yunwa ko ishi ruwa\n3. Rashin lafiyan makoufi na kusa dakai\n4. Kana fama da ciwon sanyin mara tare da basir\n5. Jini zai zuba ajikinka ko za’akarama jini`,
    // Gida 5
    `1. Zakai tafiya da kaya acikin bakar leda\n2. Inkanada mata to tanada ciki kokuma mura tana damunka\n3. Zakai bako mai abin hawa zakaje taron suna\n4. Danka ko kaninka ko yayanka ko abokinka baida lafiya\n5. Kaci nama ko zakaci sannan za’aima wanki ko kai kayi`,
    // Gida 6
    `1. Kana cikin matsalolin rayuwa sosai da sosai\n2. Kana fama da matsalan iska da yawan mafarki\n3. Wani zaizo wajanka yabatama rai sosai\n4. Kana yawan tunani akan wata mace\n5. Gashi zai zuba ajikinka bada jimawaba`,
    // Gida 7
    `1. Zaka bata da wata mutuniyarka takusa\n2. Inkanada mata saduwan aure zai yanke\n3. Bakajin dadin harkokinka adaidai wannan lokacin\n4. Akwai wani abu da kakeyi aboye ba’asaniba\n5. Sha’awa zai ringa damunka,kurji zai fitoma`,
    // Gida 8
    `1. Kayi asara ko zakai kowasu kudade sunfita\n2. Kana bin mace acikin mahaifiyarka ko mace nabinka\n3. Zakasamu labarin hatsari kona ta’addanci\n4. Ibada yana baka wahala sannan kana makaran salllah\n5. Aljanu suna batama al’amuranka sosai`,
    // Gida 9
    `1. Hukuma tataba tsareka ko zasu tsareka suwa gaba\n2. Katabayin hatsarin mota ko mashin\n3. Akwai matarda take baka wahala\n4. Zakakai wankin hula kuma zakakai wanki\n5. Akwai harkanda akafara sannan aka bari`,
    // Gida 10
    `1. Kana sha’awan noma ko kiwon dabba\n2. Zakai bako mai matsayi ko mai mulki\n3. Kayi sana’oi daban daban arayuwanka\n4. Zakaraka wani ko wata anguwa akusa\n5. Zakasiya fili ko gida ko zakasiyar`,
    // Gida 11
    `1. Zakaji labarin fadan ma’aurata\n2. Zakai ciwon kirji ko ciwon kai ko baya koma yazama kayi\n3. Harkokinka basa Tafiya yadda yakamata\n4. Za’aima sata ko makobtanka na kusa\n5. Zakasamu kudi wajan mai gidanka`,
    // Gida 12
    `1. Akwai wani mutun da kakeson haduwa dashi\n2. Akwai sihiri ajikinka sannan jikinka yana ciwo\n3. Zakaje dubiyan marar lafiya ko makobci\n4. Zakasha abu mai tsami sannan zakai aski\n5. Zaka huta bayan kasha wahala`,
    // Gida 13
    `1. Wani zaizo wajanka neman taimako\n2. Zakai bakuwan mace fasika baka ko fara\n3. Kanaso ka’auri wata mace bazawara\n4. Zakai asara ko kayi sannan zakai wanka\n5. Za’aima gyaran gida ko wani abu abanki`,
    // Gida 14
    `1. Kataba kariya ko targade ko ciwon kafa\n2. Akwai abinda kanema karasa bai dadeba\n3. Wani abu zai lalace kakai gyaransa\n4. Zakasha maganin gargajiya ko na bature\n5. Antaba yima tiyata ko za’aima zuwa gaba`,
    // Gida 15
    `1. Za’azo har inda kake adamfareka ko ayaudareka\n2. Kana yawan kulla abu yana warwarewa\n3. Ana yawan tsabama alkawari sosai\n4. Kana karanta yasin ko fatiha\n5. Mutunne kai mai juriya akan al’amura`,
    // Gida 16
    `1. Za’azoma dawata harka amma bazaiyuba\n2. Abinda kake nema zai samu amma kayi addu’a\n3. Za’aringa yawan batama rai awajan aiki\n4. Abokan harkanka zasudawo in sha allahu\n5. Kataba rashin lafiya awata gari mai nesah`,
];

const humraData: string[] = [
    // Gida 1
    `1. Kasa bukatoci dayawa agabanka sosai\n2. Tilawan karatunka yaragu ko haddanka\n3. Kataba neman aure amma bai yuba\n4. Kana tsammanin samun kudi to zaka samu\n5. Harkokinka suna nawi sannan akwai bazawaranda take sonka`,
    // Gida 2
    `1. Zaka siyawa mace wani abu koh kasiya\n2. Za’abiyaka bashi amma zaiyi jinkiri\n3. Zakaci naman kaza ko na akuya ko na rago\n4. Kasa kaya mai sirkin jan launi sanna kanka babu hula\n5. Kana tara kayan aure ko zaka tara`,
    // Gida 3
    `1. Zakai doguwar soyayya da wata mace\n2. Yaran gidanka suna ha’intarka ko abokanka\n3. Za’agogema kayan sakawanka ko anma gogema\n4. Anaji dakai acikin family dinku sannan ana saurarama\n5. Antaba yima tsohon binniya na sihiri`,
    // Gida 4
    `1. Matarka ko budurwanka zataje anguwa\n2. Makiya suna yikama muguwar addu’a\n3. Kanada yan’uba wanda kuka hada uba daya dasu\n4. Zakai hulda da manyan mutane sosai\n5. Zakaje makabarta ko kaje in sha allahu`,
    // Gida 5
    `1. Zaka samu labarin haihuwa kusa dakai\n2. Matarka tana al’ada ko budurwanka in sha llahu\n3. Za’aiwa wata tiyata acire dah zakaji labarin hakan\n4. Zaka aske gashin maranka ko na hammata\n5. Kana yawan hulda da mata manya da yara`,
    // Gida 6
    `1. Kana yawan mafarkin mayu ko isaka\n2. Kana zaman lafiya da matarka ko budurwanka\n3. Zaka samu labarin mutuwan aure akusa\n4. Kanada tsafta kwarai da gaske\n5. Za’ayanka dabba agabanka`,
    // Gida 7
    `1. Mata suna sonka suna kaunarka\n2. Zakuyi zaman mittin a family ko kunyi\n3. Zakai aure dayawa arayuwanka\n4. Ka’iya mu’amala da mutane sannan zaka samu kyeuta\n5. Za’aso ahadaka da wata adangi`,
    // Gida 8
    `1. Auren wani ko wata amakobta zai mutu\n2. Zakai asaran wani abu ko kayi\n3. Zaka samu labarin mutuwar wata mace\n4. Zari’arda kakeyi ko waninka to shari’ar zata mutu\n5. Kabata da wani mutuminka ko zaku bata`,
    // Gida 9
    `1. Zakai bakuwar mace akusa\n2. Wani zai baka kudi agefen hanya\n3. Za’aima sharri ko anyima sharrin\n4. Wani sha’ani zaitaso da zaka kashe kudi\n5. Akwai wayanda basa zaman lafiya kusa dakai`,
    // Gida 10
    `1. Zakai bako dan sanda ko dan kwangila\n2. Kaci abinci bai dadeba ko zakaci abinci\n3. Zakasai agogo ko takalmi ko hula ko kasiya\n4. Abubuwanda kake yinsu abaya yanzun baka iya yinsu\n5. Kanada jinin saurauta ko na malunta ko na mulki`,
    // Gida 11
    `1. Kanwarka ko yayarka ko yar’uwanka zatai aure\n2. Zakaji labarin komawar mace dakin mijinta\n3. Cikin kakanninka akwai wadda basanan\n4. Bukatanda kasa agaba zata biya in sha allah\n5. Bazaka mutuba sai kayi mata biyu`,
    // Gida 12
    `1. Akwai yar’uwanka da batada lafiya akusa\n2. Zaka samu alkairai wajan wata mace\n3. Makiyanka sona jin haushinka kaita addu’a\n4. Katafa fadawa mace zaka aureta sannan kafasa\n5. Akwai wadda kake so tana wahalarda kai`,
    // Gida 13
    `1. Zakai sungulan aure akusa\n2. Zakai baakin mutune sanna matan aurene akusa\n3. Zakasai abinci agidanka ko gidanku\n4. Farar mace doguwa zata kawoma sako\n5. Inkana da mata to batada lafiya ko yar’uwarka`,
    // Gida 14
    `1. Za’ai auren kanwarka ko makusanciyarka\n2. Zakaje wani wajanda yake da alaka da addini\n3. Antsabama alkawari ko za’atsabama nan kusa\n4. Mutane suna jifanka sunama muguwar addu’a\n5. Mata zasuringa sha’awar ka’auresu`,
    // Gida 15
    `Bisa ka'idar Ramli, Humra baya sauka a Gida na 15 saboda jimillar dugonsa bakwai ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Bukatu zasubiya akurkusa in sha allahu\n2. Zakai mu;amala da mace mai daraja\n3. Kana sha ‘awar yin karatu ko cigaba\n4. Zakasha gwagwarmaya sosai arayuwa\n5. Kanada yadikko arayuwanka ma’ana kishiyar uwa`,
];

const inkisData: string[] = [
    // Gida 1
    `1. Zakaje taron jana’iza ko gaisuwar mutuwa\n2. Kataba neman mukami ko matsayi da baka samuba\n3. Akwai damuwa da ta dade tana damunka\n4. Za’akawoma sakon kudi da zakasiya wani abu\n5. Ana fadace fadace akusa dakai ko ainda kake`,
    // Gida 2
    `1. Zaka mallaki wani abu mai girma akusa\n2. Wani yana aikin gini kusa dakai\n3. Akwai inda yakeda bukatan gyara agidanka\n4. Zaka rabuda wabi makusancinka\n5. Za’akwacema wani abinka ko kayi asaransa`,
    // Gida 3
    `1. Samun damuwa ko matsala da dan’wa\n2. Kicin yan’uwanka akwai wadda yake jifanka\n3. Mutun yafara gini sannan ginin yatsaya\n4. Harkokinka suna lalace sosai\n5. Rashin jin dadin zama a’inda mutun yake`,
    // Gida 4
    `1. Cikin iyayen mutun akwai wadda baya duniya\n2. Akwai abinda mutun yakeyi wanda mutane basaso\n3. Samun tsabani ko matsala da ubangida\n4. Zakase kayan sawa sannan zakaje kasuwa\n5. Zakai nasara kan makiyanka`,
    // Gida 5
    `1. Zakai fada da wasu marasa kunya\n2. Kanada marar lafiya makusanci\n3. Ibada yana bawa mutun wahala\n4. Bayason haihuwa sannan zaici kifi\n5. Kanada karfin mazakuta wajan kwanciya`,
    // Gida 6
    `1. Makwabcinka yana jifanka sannan yana maka hassda\n2. Sha’awa yana yawan damunka lokaci zuwa lokaci\n3. Macen aljana tana bibiyanka a mafarki\n4. Ciwon sanyi da basir suna damunka\n5. Taifot ko maleria ko ulsa yana damunka`,
    // Gida 7
    `1. Ana gwadama hassada da kiyaiyya karara\n2. Inkanada mata ko budurwa ko bazawara kunrabu\n3. Zakai shari’a da wani ko kunyi ko kuna kanyi\n4. Za’a sulhunta wasu ma’aurata tare dakai\n5. Antaba yima kazafi ko sharri abaya`,
    // Gida 8
    `1. Zakai nasara akan abokan gaba\n2. Za’a wuce da gawa tagabanka ko anmayi\n3. Kasha wahala arayuwanka mutane sun cutarda kai\n4. Akwai wadda suke bakin ciki da gaba dakai\n5. Zakaga hatsarin mota ko mashin ko kagani`,
    // Gida 9
    `1. Mutun yataba karyewa ko zai karye zuwa gaba\n2. Akwai doguwar tafiya agabanka akusa\n3. Zakai kyeutan kayan sakawa sannan za’abiyaka\n4. Zaka yanke farce ko kama yanke farcen\n5. Zakase kayan gini ko kasiya in sha allahu`,
    // Gida 10
    `1. Kana bin wani dan’uwanka bashin kudi\n2. Allah yama daukaka cikin danginka\n3. Kanada sa’a adaidai wanan lokaci\n4. Wani mutun yaci amnarka sannan yaha’inceka\n5. Za’a saukeka akan mukaminka ko ansaukeka`,
    // Gida 11
    `1. Kana shan maganin gargajiya ko na bature\n2. Harkokinka sundan tsaya amma zasu bude\n3. Kataba hatsarin mota ko mashiin abaya\n4. Wata mace tana bala’in sonka kai kuma baka sonta\n5. Abokan harkokinka suna kaurace maka`,
    // Gida 12
    `1. Nauwin dangi da yan’uwa zai dawo kanka\n2. Kana galaba akan makiyanka sosai\n3. Zakai fito na fito da wani ko da wata akusa\n4. Anaso arabaka da wata masoyiyarka\n5. Kafara wasu aiyukan kadakata`,
    // Gida 13
    `1. Zakai harka da kabilun mutane sosai\n2. Zaka rabuda wani ciwo ko cuta akusa\n3. Akwai sihiri ajikinka dadadde mai naiwu\n4. Zaka shirya tafiya kazo kafasa\n5. Zaka ziyarci wani malami ko kaje`,
    // Gida 14
    `1. Zaka samu sabbin abokan harka akusa\n2. Zakaga gawon dabba abakin hanya\n3. Zakaje makabarta ko kaje akusa\n4. Kunyi fada dawasu mutane ko zakuyi\n5. Zakase wani abu kasa adakinka`,
    // Gida 15
    `Bisa ka'idar Ramli, Inkis baya sauka a Gida na 15 saboda jimillar dugonsa bakwai ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Zakaji mummunan labara mara dadi\n2. Za’ai gobara akusa kasamu labara\n3. Zaka batada mutane sosai awannan lokaci\n4. Zakai askin kanka ko kayi ko zakai gyairan fuska\n5. Zaka zauna kai rubutu a takarda da hannunka`,
];

const nasaraKarijaData: string[] = [
    // Gida 1
    `1. Kasa doguwar tafiya agaba amma kana tunani akai\n2. Zakase takarda ko kasiya,wayanka babu chaji\n3. Kana cikin daukakanka da girmanka da darajanka\n4. Mutun yayi tafiye tafiye arayuwarsa ta duniya\n5. Kataba barin kasanka ko zaka bari nangaba`,
    // Gida 2
    `1. Tinani zai dameka sosai akan wata damuwa\n2. Zaka samu kudi a hannun wani mutun babba\n3. Zakase wata na’uran bature ko tv ko fanka\n4. Kayi kashe,kashen kudi kwananan ko zakai\n5. Kabata da wata mace dukkanku kunaso kushirya`,
    // Gida 3
    `1. Abokinka zai baka wata shawara kan wata damuwarka\n2. Munafurce munafurce yayi yawa akanka sosai\n3. Zakaje kakarbi dinki ko kakarba in sha allahu\n4. Mutane sunajin dadin mu’amala dakai\n5. Kayi niyyan ziyaran yan’uwanka anesa ko kayi`,
    // Gida 4
    `1. Zakase maganin asibiti ko kasiya\n2. Kayi kashe kashen kudi kuma zakasakeyi\n3. Arayuwanka zaka auri bazawara ko kama aureta\n4. Mutane suna yimaka hasada sunayima kiyayya\n5. Kanada matsala da iyayen gida ko dawasu manyan mutane`,
    // Gida 5
    `1. Za’ashiga tsakaninka da wasu mutanenka\n2. Zakaje kai intabiyu ko wata jarrabawa in sha allahu\n3. Zaka chanza wayanka ko kachanzata\n4. Kayi sanateshon din dakinka ko zakai\n5. Harkoki sunayima kwangaba kwanbaya\n6. Kanada kima da daraja a’inda kake`,
    // Gida 6
    `1. Zakaje duban marar lafiya a asibiti\n2. Zakaje aima gwaji a kemis ko asibiti\n3. Kataba zana wata jarrabawa ta wayek ko ta neco\n4. Kuntaba shirya wani tsari daga baya tsarin yarushe`,
    // Gida 7
    `1. Matarka ko budurwanka zataje ganin gida\n2. Zakaje anguwa ko kaje sannan za’akawoma kayan wani\n3. Kataba neman wani mukami ko wani matsayi\n4. Mutane suna yawan neman taimako awajanka\n5. Akwai wasu kuddadenka dasuka makale abaya`,
    // Gida 8
    `1. Zakai galaba akan makiyanka ko kayi\n2. Zakahau jirgin sama ko na ruwa ko na kasa\n3. Akwai abinda kakeso kayi amma kana tsoro\n4. Antaba yima sharri amma allah yaketararda kai\n5. Akwai rijiya agidanku ko agidan makobtanku na kusa`,
    // Gida 9
    `1. Kasa tafiya agabanka amma kadaga\n2. Allah zai hadaka da mutanenda zaka samu alkairi\n3. Zaka mallaki abin hawa arayuwanka\n4. Zaka samu matsayi mai girma awajan mutane\n5. Zaka samu shugabancin wasu mutane`,
    // Gida 10
    `1. Wani mutun mai matsayi zaizo wajanka ko yazo\n2. Zakai mu’amala da mutane masu damara\n3. Ana kiwon dabbobi a anguwarku\n4. Akwai addu’anda kakeyi wanda baka gamaba\n5. Kayi sha’awan yin aikin damara ko na siyasa abaya`,
    // Gida 11
    `1. Abinda kasa agaba zaiyu kakara addu’a sosai\n2. Yan’uwanka zasuzo wajanka ko sunzo\n3. Zakaje siyan wani abu ko kasiya\n4. Kayi wasu asarori abaya ko kana kanyinsu\n5. Zaku hada kai dawata mace dazakuyi business`,
    // Gida 12
    `1. Makiya suna taget nana,katsaya da addu’a\n2. Ana jifanka ba’asamunka katsaya da addu’a\n3. Akwai bukatu amma kudi yahana ayisu\n4. Zakasiya brush da makilin ko kasiya\n5. Akwai zobe ahannun mutun ko hakorin makka`,
    // Gida 13
    `1. DAzakai tafiya zaka samu alkairi da albarka\n2. Zaka mallaki gida ko fili ko gona ko kamallaka\n3. Ana yawan yimuku sata awaje asiri zai tonu\n4. Ana girmamaka ainda kake sosai da sosai\n5. Mutane dayawa zasu amfanu dakai sosai`,
    // Gida 14
    `1. Mutumin kirki zaizo wajanka kuma zakai farinciki sosai\n2. Antaba kulleka akurkuku ko za’ai\n3. Mutun zaise kayan more rayuwa\n4. Zakai soyayya da wata mace dazata soka\n5. Zakai yaudara ko kuma kai za’aiwa`,
    // Gida 15
    `1. Kanason wani abu wanima yanason abin kana rikici\n2. Kasa wata bukata agabanka da dadewa\n3. Wani mai mulki ko mai sarauta yana fada dakai\n4. Zaka auri mata biyu arayuwanka ta duniya\n5. Zakai soyayya da mata dayawa anangaba`,
    // Gida 16
    `1. Sunanka da ambatonka zai yadu aduniya\n2. Baka waje daya da yan’uwanka\n3. Samun nasara da daraja tare da daukaka arayuwa`,
];

const iskafiData: string[] = [
    // Gida 1
    `1. Kamatsu akan bukatanka tabiya amma taki biya\n2. Zaka samu matsayi mai girma arayuwanka\n3. Zaka mallaki manyan abubuwa arayuwanka\n4. Masu mulki zasu ringa neman shawaranka\n5. Zakuyi jayayya da wasu mutane akan kudi`,
    // Gida 2
    `1. Zakai wasu asarori ko kayi kwanannan\n2. Anrikema wasu kudinka masu nauwi\n3. Ana binka bashi kuma kaima kanabin bashi\n4. Zakai fada da yan’uwanka akan gado ko anyi\n5. Wani zaizo inda kake yabatama rai sosai`,
    // Gida 3
    `1. Makiya suna son yima taron dangi katashi tsaye\n2. Zaka gaji wani abu mai girma wajan iyayenka\n3. Daga family dinku ta wajan uwa akwai karancin hadin kai\n4. Babu makawa saika mulki wasu mutane arayuwanka\n5. Akwai hayaniya da zata taso akusa dakai`,
    // Gida 4
    `1. Zaka nemi dakin haya ko shago ko gida ko gona\n2. Zakai mu’amala da manyan mutane masu daraja\n3. Burinka baya cika akan lokaci kakara addu’a\n4. Zakai rayuwa da iyayenka tsawon lokaci\n5. Za’anema aima auren dangi cikin danginka`,
    // Gida 5
    `1. Samunka yadan tsaya sannan za’akiraka awaya\n2. Za’akawoma sako ko a aikoma ita ta waya\n3. Kuna da mai ciki agidanku sannan kafitob daga wanka\n4. Zakase babbar mota arayuwanka nan gaba\n5. Zakai tafiyan kafa mai tsawo a wannan rana`,
    // Gida 6
    `1. Anyi maka sihiri irin nabinniya jikinka zainama ciwo\n2. Zaka nemi abu amma baza kasamuba\n3. Matarka ko budurwanka ko bazawaranka tana jinin haila\n4. Kayi aiki kagaji awannan rana sosai\n5. Wani mutun zaizo wajanka yana cikin damuwa`,
    // Gida 7
    `1. Zaku batada wata mutuniyarka a inda kake\n2. Basir yakamaka ko zai kamaka anama rashin gaskiya\n3. Kataso maraya ko zaka rike maraya\n4. Zaka samu jinkirin aure arayuwanka\n5. Zaka auri mace mai daraja arayuwanka`,
    // Gida 8
    `1. Zaka samu daukaka nangaba arayuwanka in sha allah\n2. Zaka kashe kudi a sungulan aure naka ko na kanwarka\n3. Zaka samu kubuta daga dukkan damuwanka\n4. Za’a sauke wani mai mulki amukaminsa\n5. Alkali ko hukuma suntaba yanke hukunci akanka`,
    // Gida 9
    `1. Zakai bakin mutane masu matsayi\n2. Zaka shiga damuwa akan wata bukata\n3. Zaka rike dan riko ko yar riko\n4. Zaka gaji mulki mutuwar wani mai mulki\n5. Kanada dafa’I mai girma ajikinka`,
    // Gida 10
    `1. Allah zaima albarka arayuwanka sosai\n2. Mutane zasu rinka girmamaka sunama biyayya\n3. Kana nema cikin wahala mutane suna kaunarka\n4. Mutane suna zarginka da girmanka\n5. Mutun zai dade aduniya mahaifinsa sananne’ ne a inda yake`,
    // Gida 11
    `1. Zaka samu babbar kyeuta arayuwanka sosai\n2. Zakai tafiya da wasu mutane zuwa wani gari\n3. Babu makawa zakai aure daga baya zaku rabu\n4. Zakai mu’amala da masu mulki ko masu sarauta\n5. Akwai macenda take batama rai karasa yadda zakai`,
    // Gida 12
    `1. Zaka kubuta daga sharrin makiya\n2. Allah zaima baiwan makiyanka zasu koma yima hidima\n3. Kuna famada marar lafiya adanginku\n4. Kajima kana shan magani kan wani ciwonka\n5. Zakai sharan daki ko za’aima a wannan rana`,
    // Gida 13
    `1. Duk yawanku daga cikin mahaifiyarku baza kuwuce ku bakwai ba\n2. Zaka mallaki gonaki da filaye da gidaje dawasu kadarori\n3. Allah zai mallakama manyan yan’anguwanku\n4. Zakai tsawan rayuwa bayan mutuwan iyayenku\n5. Annuna maka gata sosai akaraminka`,
    // Gida 14
    `1. Wani abokinka zai yaudareka ko zai ha’inceka\n2. Zakai bakon mutun mai alkairi kwarai\n3. Mutane zasu riga yabonka sosai kuwa\n4. Zakaci kwoi ko bisket ko dabino ko gyeda\n5. Kana makaran sallan asuba ko isha’i`,
    // Gida 15
    `1. Zaka auri mace bazawara sanan zaku Rabu\n2. Kasaki matarka kanaso ta dawo amma taki Dawowa\n3. Duk abinda kasa agaba baya yuwa akan lokaci\n4. Abubuwa zasu ringa tahowa suna watsewa\n5. Akwai wani malami da yake jin haushinka`,
    // Gida 16
    `1. Abinda kake nema zai samu kayi addu’a\n2. Za’a mutu abarma gado masu yawa\n3. Bacci baya isanka kanason kwalliya.`,
];

const ijtimaiData: string[] = [
    // Gida 1
    `1. Zaka samu ilimi da kudi da aikin yi arayuwanka\n2. Akwai abinda kake so kayi kana wasi wasi akai\n3. Kunyi rigima da wani ko zakai sannan kayi addu’a\n4. Kayi hakuri kadan in sha allahu bukatu zasubiya\n5. Kana so kasiya abin hawa mota ko mashin`,
    // Gida 2
    `1. Zakai rigima da wasu akan wata harka ko anyi\n2. Zaka samu kudi mai nauyi zakai kashe kashe\n3. Macen da bata da kamun kai zatazo wajanka\n4. Asanda akaima istikharan kana jin kishirwa\n5. Abin chajin wayanka zai kone ko wani abunka`,
    // Gida 3
    `1. Zakai mu’amala da manyan mutane yan kasuwa\n2. Yan;uwanka suna jifanka suna munafurtanka\n3. Mutuwan wani dan’uwa acikin dangi ko anyi\n4. Bakajin dadin zama ainda kake\n5. Kataba ciwon dan yatsa ko kunne ko hakori`,
    // Gida 4
    `1. Zakai mu’amala da manyan masu kudi\n2. Zaka samu mukami ko matsayi mai girma\n3. Zaka ziyarci wani malami ko shi yazoma\n4. Zaka shiga kasuwa awannan rana\n5. Zakasha wani abu mai zaki ko kunu ko nono`,
    // Gida 5
    `1. Za’akawoma sakon kaya a leda\n2. Wani zaizo wajanka da abin hawa\n3. Matarka ko kanwarka ko yayarka tana da ciki\n4. Zaka rubuta messege ta waya katurawa wani\n5. Zaka yanka dabba ko za’ayanka agabanka`,
    // Gida 6
    `1. Harkokinka basa tafiya yadda kake so\n2. Wani abokin harkanka yana jifanka\n3. Zazzabi da mura da zafin jiki yana damunka\n4. Zaka canza wayarka ko kacanza\n5. Kasha shayi da breed ko zakasha`,
    // Gida 7
    `1. Zakaje taron suna ko biki ko siyasa ko mutuwa\n2. Kana so kayi aure amma abin yaki yuwa\n3. Zakaje wajan cin abinci kasiya kaci\n4. Matarka ko budurwanka ko bazawaranka tanada ciki\n5. Zakase kayan abinci kakai gidanka ko gidanku`,
    // Gida 8
    `1. Jini zai zuba ajikinka ko waninka\n2. Zakahau abin hawa yalalace a hanya\n3. Zakai soyayyar da zata baka wahala\n4. Zakai kyeutan kaya ko kayi ko wani abin\n5. Akwai alkawarinda kai baka cikaba`,
    // Gida 9
    `1. Zaka mallaki ababen hawa dayawa arayuwanka\n2. Macen da batada kamunkai zatazo wajanka\n3. Kana sha’awan karin ilimi arayuwanka\n4. Kayi tafiye tafiye sosai arayuwanka\n5. Zakai tafiya zuwa wani gari zuwa gaba kadan`,
    // Gida 10
    `1. Bakayi breekfas da wuriba a wannan rana\n2. Kasha ruwa ko lemu a kofi\n3. Kamakara sallan asuba kanajin nawun jiki\n4. Wani babban mutun yanason ganinka\n5. Akwai wasu ayyuka agabanka sosai`,
    // Gida 11
    `1. Kana yawan tunani akan rayuwanka\n2. Kanaso kasaida wata kadaranka\n3. Jama’a dayawa sunajin haushinka\n4. Wani babban mutun yanason ganinka\n5. Kana bayyana sirrinka inda bai daceba`,
    // Gida 12
    `1. Ma’aikata zasu kulleka ko sun kulleka\n2. Akwoi asiri da abokan harka sukaima\n3. Kunsamu tsabani da wani malami ko zakusamu\n4. Addu’arda kai takarbu kakara da aikin dafa’i\n5. Mutane zasu ringa yawan kawomaka dawainiyarsu da matsalolinsu`,
    // Gida 13
    `1. Za’akawoma sakon kudi ko tabanki\n2. Za’anema bashin kudi a hannunka ko annema\n3. Zakai bako akusa ko kayi,ciwon cikin yaro\n4. Zakuyi zaman mitin da abokan harkokinka\n5. Zaka shiga kasuwa dawani kuyi siyayyah`,
    // Gida 14
    `1. Zaka samu iyayen gida dazasu kula dakai\n2. Ana munafurtanka sannan ana yawan magananka\n3. Za’aima kyauta bazato batsammani\n4. Zakai biyan bashi ko kayi kanada farin jini\n5. Rayuwa tanama gardama da taurin kai`,
    // Gida 15
    `1. Zaka samu albarka da alheri da arziki\n2. Samun biyan bukatun da akasa agaba\n3. Yan’uwanka na jini sunama kiyayyah\n4. Zakai tsawon rai sosai aduniya\n5. Kai ma’abocin saka zobene ko agogo ahannu`,
    // Gida 16
    `1. Zakanemi wata da aure koi ta tanemeka\n2. Abinda kakeso zai samu amma cikin wahala\n3. Mutane zasu soka sukaunaceka sosai`,
];

const nasaraDakilaData: string[] = [
    // Gida 1
    `1. Zakasamu alkairi wata zatazoma da kukanta\n2. Makiya suntaso maka amma basuda nasara\n3. Ranka yana yawan baci yara zasuzo gaisheka\n4. Typot ko maleria ko ulsa ko hawan jini yana damunka\n5. Kana nazarin barin gari ko chanza sana’a`,
    // Gida 2
    `1. Zaka samu manyan kudade masu yawa\n2. Makiyanka zasu koma fadawanka in sha allahu\n3. Akwai wani abuda kake jayayyah akansa\n4. Abinci agidanka yakare ko yana dafda karewa\n5. Katabayin kiwo ko zakai zuwa gabah`,
    // Gida 3
    `1. Makiyanka sunfada cikin masifa da bala’i\n2. Dafa’inda kakeyi ajikinka yana tasiri sosai\n3. Akwai yar’uwanka da akasaketa\n4. Wadda take binka macece ko wacce kakebi\n5. Akwai rikicin wani fili ko gida ko gona da kai`,
    // Gida 4
    `1. Iyayenka ko kakanninka basa duniya\n2. Kakanninka sun mutu kana karami\n3. Iyayenka ko kakanninka sunyi jinya kafin sum utu\n4. Kana tunanin chanja wajan zama\n5. Akwai wani mutun da yakeson rabakada wata`,
    // Gida 5
    `1. Matarka ko kanwarka ko yar’uwanka tana shayarwa\n2. Akwai wacce takema son sha’awa sosai\n3. Katara kayan wanki dayawa alokacin\n4. Jikinka yanason wanka alokacin zakai tafiya`,
    // Gida 6
    `1. Kataba amfani da maganin iska ko zakakarba\n2. Wani abu cikin kayanka zai bata ko yabata\n3. Wata mace zatai bari akusada kai in sha allah\n4. Sha’awa zataringa damunka sosai\n5. Wani lokaci kanajin ciwon jiki gabadaya`,
    // Gida 7
    `1. Zaka kwanta da mace azahiri ko amafarki\n2. Zakai aure na alfarma arayuwanka\n3. Akwai matanda kuka dade kuna tare kunrabu\n4. Akwai wacce kakeso mai suna Rashida\n5. Za’akulle wani dan’uwa kaje kadubashi`,
    // Gida 8
    `1. Acikin yayan babanka ko mamarka wani yamutu\n2. Wata tsohuwa a anguwanku zata mutu\n3. Wani zaima sharri yakoma kansa\n4. Zakaci wani abu mai yaji awannan rana\n5. Wata bazawara zataso ka’aureta sosai`,
    // Gida 9
    `1. Mutane zasu nunma tsananin kiyayyah\n2. Kaci nama ko kifi ko doya ko kankana akusa\n3. Zakai baki bada dadewaba ko kayi akusa\n4. Wani yataba cin mutuncinka saida kai kuka\n5. Zakase itacen girki agidanka ko kasiya`,
    // Gida 10
    `1. Kataba rike wani mukami kazo karasa\n2. Antaba yimaka sharri ko kazafi arayuwa\n3. Mutane suna yimaka kallon mutumin kirki\n4. Kana fama da wata jinya dadaddiya\n5. Zaka samu kudi bazato batsammani`,
    // Gida 11
    `1. Abinda kadade kana nema kana daf da samu\n2. Kana cikin farin ciki adaidai wannan lokacin\n3. Kofofin samunka zasu bude sosai kuwa\n4. Addu’ar dakai takarbu kai sadaka\n5. Zaka samu kyautan gida ko fili arayuwanka`,
    // Gida 12
    `1. Zakai nasara akan makiyanka in sha allahu\n2. Bukatocinda kasa agaba zasubiya in sha allahu\n3. Danginku sunada asali agarinku kaka da kakanni\n4. Zaku hadu dayawa kuje wani waje ziyara\n5. Akwai aikinda kanema karasa arayuwanka`,
    // Gida 13
    `1. Kabi ahankali mata suna sonka da zina\n2. Allah zai dagaka acikin danginku sudawo sunama hassada\n3. Makiyanka nangaba zasu dawo fadawanka\n4. Kayi noma ko zakai ko kanada sha’awanyi\n5. Zaka samu alkhairi mai girma nangaba`,
    // Gida 14
    `1. Kana bayyana sirrinka inda bai daceba kakula\n2. Motanka ko mashi dinka ko wani abunka yalalace\n3. Akwai wani abu da kakeso kayi wasu sunhanaka\n4. Zaka hadu da wani mutuminka zaka samu kudi\n5. Za’aturama kudi a bank ko anturama akusa`,
    // Gida 15
    `1. Bukatunka zasubiya akusa in sha allahu\n2. Harkokinda kasa agaba zasubiyu cikin sauki\n3. Zaku tattauna wata matsala da yan’uwanka\n4. Bakajin dadin zama da matarka ko wata\n5. Wata mata tana cutar dakai sosai`,
    // Gida 16
    `1. Kana son makiyanka kana musu hidima\n2. Allah yarufama asiri adaiadai wannan lokaci\n3. Allah zaima baiwa dayawa arayuwanka`,
];

const sa_iliData: string[] = [
    // Gida 1
    `1. Kana cikin fargaba da tsoro da wasiwasi\n2. Za’atambayeka wani abunda bakadashi akusa\n3. Kafara gini kadakatar ko kana kai ko zakai\n4. Zakasha gwagwarmaya da mutane sosai\n5. Zaka bata da wani makwabcinka ko anyi`,
    // Gida 2
    `1. Zakai kashe kashen kudi ko kayi akusa\n2. Za’a hada kai dakai ataimaki addini sosai\n3. Zaka sulhunta ma’aurata ko kayi akusa\n4. Zakuyi hayaniya ko chachanbaki da wani\n5. Za’ayankewa wani dan’uwanka hukunci ko anyi`,
    // Gida 3
    `1. Zakuyi rikici da wata mace makusanciya sosai\n2. Zakai rayuwa da wani mutun mai mulki\n3. Akwai rikicin aure a danginku za’anemeka\n4. Anyima binniya na sihiri a’inda kake\n5. Antaba damfaranka ko yima sata arayuwanka`,
    // Gida 4
    `1. Akwai tafiyan barin gari agabanka akusa\n2. Kana rigima da wasu manyan mutane agarinku\n3. sabani da iyayen gida ko yan’uwan iyaye\n4. Kataba kwaura daga inda kake ko zakai\n5. Kana yawan shiga damuwa akan wata bukata`,
    // Gida 5
    `1. Bakada ra’ayin haihuwan yayah dayawa\n2. Tafiya zata zomaka babu shiri lokaci daya\n3. Za’aiwa wata ciki kaji labari koh kaji\n4. In kanada mata toh tayi family filaning na haihuwa\n5. Gabanka babu karfi kanemi maganin mayu`,
    // Gida 6
    `1. Kana yawan mafarki amma baka ganewa\n2. Iskokai suna bibiyarka suna yima barna\n3. Kayi ahankali zaka fada sharrin mata\n4. Wani abun alkairi zaizoma za’aima munafurci\n5. Kana baiyanawa mata sirrinka karage`,
    // Gida 7
    `1. Akwai macenda take yawan baka matsala\n2. Zakaje daurin aure ko biki kaida wasu\n3. Saduwan aure zai yanke tsakaninka da matanka\n4. Zakai fada da wani akan mace akusa\n5. Kana soyayya da wata anesa ko awani gari`,
    // Gida 8
    `1. Kasa wani abu agaba yagagareka kayi addu’a\n2. Bukatunka basa biya akan lokaci\n3. Mutane suna yawan batamaka rai\n4. Akwai wadda kukeson kadau fansa akansa\n5. Akwai wadda kuke shari’a dasu a kotoh`,
    // Gida 9
    `1. Danginka da yan’uwanka suna sonka sosai\n2. Zakajewa wasu ziyara ko za’azoma\n3. Wani babban mutun zai mutu a’inda kake\n4. Bukatunka zasubiya bayan kasha wahala\n5. Za’araba muku gado ko anraba muku`,
    // Gida 10
    `1. Kasa burace burace dayawa arayuwanka\n2. Zaka hadu da macenda zakai murna da haduwa da ita\n3. Zakai fada da manyan mutane sunemi kulleka\n4. Ma’aikata suna nemanka ko zasu nemeka\n5. Antaba yima tiyata ko za’aima ko kataba karyewa`,
    // Gida 11
    `1. Zakaje wajan malami ko babban mutun\n2. Ana binka bashi ko kanabi\n3. Za’aturama kudi ta akaudin wayanka\n4. Bukatocinka zasubiya akusa in sha allahu\n5. Matafiyi zai dawo sannan zakasha abu mai zaki`,
    // Gida 12
    `1. Zakai asara ko zakai ko wani daga dangi zaiyi\n2. Ana jifanka ba’asamunka kayi addu’a\n3. Makiya suntasoma kayi taka tsantsan\n4. Kuna yawan shirya abu yana warwarewa\n5. Wuta tataba konaka ko waninka`,
    // Gida 13
    `1. Burinka zaicika akusa in sha allahu\n2. Kana wahala akan wata bukatarka\n3. Mutane sunama rashin gaskiya sosai\n4. Zakai nasara akan makiyanka in sha allahu\n5. Baka waje daya da iyayenka`,
    // Gida 14
    `1. Zaka tashi agidanka ko wajan cinikinka\n2. Wani malami asnesa yana jifanka\n3. Maganganun mutane yayi yawa akanka\n4. Akwai wani hayaniya ko rikici da zaitasoma\n5. Mutuwan wani malami a’inda kuke`,
     // Gida 15
    `Bisa ka'idar Ramli, Sa'ili baya sauka a Gida na 15 saboda jimillar dugonsa biyar ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Zakaje ganin gida ko ziyaran iyaye\n2. Wani mutun zaizo wajanka bada jimawaba\n3. Zaka samu labarin mutuwa a’inda kake\n4. Akwai bacin rai cikin abinda akasa agaba\n5. Zaku shirya wata kungiya sannan zata waste`,
];

const nakiyyaData: string[] = [
    // Gida 1
    `1. Yawan muna furce muna furce akanka\n2. Kana soyayya da wata mace\n3. Kataba shuka bishiya ko zakai\n4. Rigima da wani abokin harkanka akusa\n5. Lalacewan harkoki dashiga bacin rai`,
    // Gida 2
    `1. Shigowan manyan harkoki akusa\n2. Zaka samu alakirai masu yawa\n3. Anama bakinciki akan abinda kakeyi\n4. Zakai bakuwar mace mai goyo\n5. Kuna da matsaloli a familynku abangaren uba`,
    // Gida 3
    `1. Kasamu daukaka da girma acikin yan’uwanka\n2. Ana yawan maganganu akanka cikin family dinka\n3. Yan’uwanka basa taimakonka\n4. Dawainiyar wasu mutane akanka\n5. Anturoma da sako amma baizo wajankaba`,
    // Gida 4
    `1. Zaka samu jagoranci wasu jama’a\n2. Zakai manyan baki masu girma daga nesa\n3. Wani acikin zuri’arku zaiyi mulki ko sarauta\n4. Kanaso kaseda wata kadaranka akusa\n5. Kai dan mayan mutanene agarinku`,
    // Gida 5
    `1. Wata gajeruwan mace zata soka sosai\n2. Zakai hidiman aure kwanannan ko kunyi\n3. Zaka haifi yah mace arayuwanka ko kayi\n4. Burinka zai cika akan wata mace\n5. Katara wasu kudade bakason tabasu`,
    // Gida 6
    `1. Zaka kafitarda maniyyi azahiri ko a badini\n2. Akwai macen iska da take sonka sosai\n3. Bera yana muku barna ainda kuke\n4. Akwai macenda tasaka agaba sosai\n5. Basir yakamaka ko zai kamaka`,
    // Gida 7
    `1. Kuna yawan batawa da mutane awannan lokacin\n2. Manyan mutane suna shiryama sharri da makirci\n3. Antaba yimaka sharri kan abinda bakaiba\n4. Antaba yimaka sata mai girma ko za’aima\n5. Kataba tafiya akan abin hawa yalalace ahanya`,
    // Gida 8
    `1. Kanada aljanu atare dakai ko kasani ko bakasaniba\n2. Makiyanka sun fada cikin bala’I da musiba\n3. Kataba hawa jirgin ruwa kayi tafiya akai\n4. Wata yar’uwanka batada lafiya zakaje dubata\n5. Za’ajima wani ciwo da wuka idonka zaigani`,
    // Gida 9
    `1. Wasu matafiya zasu dawo zakaji labari\n2. Zakai bakin mata masu yawa ko kayi\n3. Za’adauke wutan nefa a’inda kake ko andauke\n4. Zakasa warwaro ko zobe a hannunka\n5. Zaka karbo kayanka wajan tela ko kakarbo`,
    // Gida 10
    `1. Zaka samu alakiri mai yawa arayuwanka\n2. Abubuwanda kasa agabanka zaiyiyu in sha allahu\n3. Zaka samu girma da matsayi bayan kasha wahala\n4. Zakase abinci agidanka ko gidanku\n5. Iyayenka basa duniya ko wani daga ciki`,
    // Gida 11
    `1. Abinda kake nema zaka samu cikin sauki\n2. Antaba yima karin ruwa ko jini ajikinka\n3. Harkokinka sundan tsaya amma zasu bude\n4. Zakai mu’amala da mutane daban daban\n5. Ana yawan muna furtanka akan harkokinka`,
    // Gida 12
    `1. Yawan makiya akanka maza da mata\n2. Kataba ciwon ido ko ciwon kunne ko ciwon hakori\n3. Fada dawata mace makwabciya a’inda kake\n4. Mashin ko mota yataba buge wani agabanka`,
    // Gida 13
    `1. Kana cikin matsala ta kudi ko zaka shiga\n2. Akwai wata harka dazata fitoma\n3. Za’ai gobara kaji sannan zakaje asibiti\n4. Abin hawanka yalalace ko kafanka naciwo\n5. Barayi suna damunka a inda kuke`,
    // Gida 14
    `1. Zaka samu saukin munafurci awannan lokacin\n2. Zakaje taron addini ko kunje anan kusa\n3. Kataba zama a gidan haya ko waninka\n4. Za’abatama rai awannan ranan ko anyi\n5. Ana binka bashi kaima kana bi`,
    // Gida 15
    `Bisa ka'idar Ramli, Nakiyya baya sauka a Gida na 15 saboda jimillar dugonsa biyar ne. Duk wani tauraro mai dugo 5 ko 7 baya sauka a wannan gidan.`,
    // Gida 16
    `1. Za’azoma da labarin wata harka ko anzo\n2. Wasu mutane suna cutar dakai adangi\n3. Zakai bakuwar mace fasika akusa\n4. Kana cikin daki wani ko wata zata lekoka\n5. Zaka shiga waje mai sanyi ko kashiga`,
];

const alkaliData: string[] = [
    // Gida 1
    `1. Kana cikin kyaikyawan yanayi bukatunka zasubiya sosai\n2. Mutane suna karuwa dakai kanada fikiran karatu\n3. Kadade kanason wani abu amma baka samuba\n4. Ciwon kai da yawan tunani yana damunka\n5. Kana sha’awan karin ilimi ko karatu`,
    // Gida 2
    `1. Zaka samu kudi da farin ciki da arziki\n2. Zaka samu nasarori sosai arayuwanka\n3. Zaka nema bashi kuma kaima za’anema awajanka\n4. Kana cikin zafin kai da dimuwa da wasi wasi\n5. Zaman lafiya da iyaye ko wasu manyan mutane`,
    // Gida 3
    `1. Addu’arda kakeyi takarbu za’azoma da labari maidadi\n2. Akwai shari’arda akeyi a danginku ko anyi\n3. Zaka samu abinda kadade kana nema baka samuba\n4. Kana maganar aure da wata ko kayi\n5. Baka tareda iyayanka waje daya`,
    // Gida 4
    `1. Rashin lafiyan wani malami a’unguwarku ko dangi\n2. Kana aikata wani abu aboye baka so asani\n3. Zakai mu’amala da masu mulki ko sarauta ko kudi\n4. Kana daga cikin manyan yayan mamanka\n5. Kana aikin gini ko zakai akwai shari’a agabanka`,
    // Gida 5
    `1. Zaka samu yaya masu albarka arayuwanka\n2. Zakase abinci kakai gidanku ko wani waje\n3. Zaka samu labarin wani bashida lafiya\n4. Akwai mai ciki kusa dakai agidanku ko unguwanku\n5. Zaka raba fada akusa ko karaba`,
    // Gida 6
    `1. Iskokai suna bibiyanka ko kasani ko baka saniba\n2. Wani lokaci baka ganewa jikinka\n3. Akwai fitinanda kake ciki zatakau in sha allahu\n4. Kana yawan shiga bacin rai da damuwa\n5. Shari’arda akeyi zata mutu ko kai ko waninka`,
    // Gida 7
    `1. AKwai wata harka da zata sameka za’aima munafurci\n2. Rigimar aure adangi ko a family zakaji labari\n3. Kana da kanwa bazawara ko yayarka agida\n4. Auren wata zai mutu zakaji labari a familin ko\n5. Zakaci nama awannan rana ko kaci`,
    // Gida 8
    `1. Kana baiyyana sirrinka inda bai daceba\n2. Akwai wanda yakeso yawulakantaka\n3. Za’aima sharri mai girma ko anyima kabi a hankali\n4. Akwai wadda takema soyaiyyar sha’awa\n5. Kunbata da wata mutuniyarka ko zaku bata`,
    // Gida 9
    `1. Zakaje aikin hajji ko kaje ko wata Doguwar tafiya a gaban ka\n2. Zakai manyan baki daga nesa ko kayi\n3. Kana so kaje asibiti akwai abinda yake damunka\n4. Zaka samu babban matsayi arayuwanka\n5. Mutane suna kaika matsayinda baka jeba`,
    // Gida 10
    `1. Zakai alkawari da wani babban mutun zai saba\n2. Akwai wani babban mutun yana jifanka\n3. Kunyi tafiya da wasu mutane amma kun bata\n4. Kataba tsayawa da wani agaban alkali\n5. Zakai harkoki da mutane daban daban zakaji dadi`,
    // Gida 11
    `1. Zakasamu nasara akan makiya sosai\n2. Addu’o’inda kai takarbu kai sadaka malam\n3. Burinka zai ciki amma kabi ahankali\n4. Kana so kabudewa wani harka ko kabude masa\n5. Ana yawan munafurce munafurce akanka`,
    // Gida 12
    `1. Kana yawan mafarkai barkace kayi addu’a\n2. Akwai wani malami ko masani yana jifanka\n3. Akwai addu’o’inda kakeyi kadaina to kaci gaba\n4. Zaka zauna kai rubutu awannan rana\n5. Za’ayi iska ko hadari ko ruwan sama`,
    // Gida 13
    `1. Kataba zaman karatu awani wajen kabar giri\n2. Zaka tashi ainda kake ko katashi\n3. Za’ai sata a’inda kake ko anyi zakaji labari\n4. Zaka samu karatu mai yawa arayuwanka\n5. Mutane zasu amfanu dakai sosai da sosai`,
    // Gida 14
    `1. Zaka warke akan wata cuta da take damunka\n2. Zakai hayaniya da makwabcinka ko kunyi\n3. Za’ayenke muku hukunci dawani akan wata mata\n4. Za’azoma da wani labari amma karyane\n5. Zakaje ziyara wani wajan ko za’azoma`,
    // Gida 15
    `1. Biyan bukatun abinda akasa agaba akusa\n2. Zakai doguwar tafiya dawasu mutane\n3. Kanason kayi karatun wani fanni acikin ilimi\n4. Kataba rauni akaima dinki ajikinka\n5. Za’abaka shugabanci arayuwan ka`,
    // Gida 16
    `1. Ana alfahari dakai adanginku sosai\n2. Mutane suna girmamaka suna jin tsoronka\n3. Zaka samu alkairi mai yawah arayuwanka`,
];

const jama_aData: string[] = [
    // Gida 1
    `1. Zaka samu labarin daurin aure ko kasamu\n2. Akwai abinda kakeso kayi hankalinka bai kamaba\n3. Bukatu zasu ringa biya ayi sadaka akai akai\n4. Zakashiga cikin taron jama’a ko kashiga\n5. Kana cikin wasi wasi akan abunda kakeyi`,
    // Gida 2
    `1. Zakakai ajiyar kudi bank ko wani waja daban\n2. Zakase wani abu kasa adakinka\n3. Za’akawoma farin takarda na notic ko samun aiki\n4. Za’azaunardaku aimuku sulhu kai da wani\n5. Zaka samu alkairi harkoki zasu bude`,
    // Gida 3
    `1. Zaka sha jarrabawa kala kala arayuwanka\n2. Kunada yawa a family ko danginku\n3. Zakuyi wani taro ko kunyi acikin family\n4. Nawun dangi ko yan’uwa zai dawo kanka\n5. Anmaka alkawari antsaba`,
    // Gida 4
    `1. Al’amuranka zasu jeru yadda kakeso in sha allahu\n2. Zaka samu hadin kain yan’uwanka dakuke ciki day\n3. Zaka rabu da iyayenka lamiy lafiya\n4. Allah zai daukakaka cikin yayan babanka\n5. Ruwan sama ko nakasa zaiyi barna ko yayi`,
    // Gida 5
    `1. Zaka haifi yaya gwaraza masu tarin albarka\n2. Za’aringa yawan zuwa neman taimakonka\n3. Za’aimuku haihuwa ko kaji labara\n4. Antaba yima tiyata ko za’aima kai addu’a\n5. Kataba ciwon kuraje ko zakai ko waninka`,
    // Gida 6
    `1. Kana zargin wani ko wata zargin gaskiyane\n2. Za’aje aimaka allura akan wata rashin lafiya\n3. Wata mace tana yawan batama rai akai akai\n4. Gashi yayi yawa akanka kaje kai aski\n5. Zakukai wani asibiti ko kunkai`,
    // Gida 7
    `1. Za’agayamaka taron daurin aure ko wani biki\n2. In kanada mata ko bazawara to bakajin dadin zama da ita\n3. Kana yawan samun tsabani damutane\n4. Zaka sha wani abu agora sannan zakaci goro\n5. Zakai Magana da wata mace awaya tabatama rai`,
    // Gida 8
    `1. Za’agayama taron mutuwa ko jana’iza\n2. Zaka samu labarin hatsarin muta\n3. Za’ai gobara ainda kake ko anyi abaya\n4. Abokan harkanka zasu watsemah\n5. Mutane basama gaskiya yadda kakeso`,
    // Gida 9
    `1. Za’agiyama taronda yashafi addini\n2. Ana gina masallaci ko makaranda a wajanku\n3. Kasa tafiya agabanka kadaga ko zakayi\n4. Wadda kukai makaranta tare zai temakeka\n5. Zaka hau abin ahawa yalallace ko mai yakare`,
    // Gida 10
    `1. Zakai kyeutan kaya ko kudi ko wani abu\n2. Zakayi zama da wasu manyan mutane\n3. Antara yashi ko blok ko wani kaya akofan gida\n4. Zakase itacen girki ko gawayi agidanka\n5. Wani yana jayaiya dakai akan wani matsayi`,
    // Gida 11
    `1. Abokanan harkanka zasuyima rashin gaskiya\n2. Kanada zobuna ahannunka ko sarkan wuya\n3. Zaka kai hulanka ko kayanka wanki\n4. Za’agaiyaceka wani taro a angiwanku\n5. Kudadenka sunmakale ahannun mutane`,
    // Gida 12
    `1. Wasu mutane suna aibataka suna zaginka\n2. Mutane zasu cutar dakai dayawa\n3. Wasu zasuyi fada ainda kake kagani\n4. Barayi ko marasa gaskiya zasu dameku\n5. Zakai mu’amala da kabilun mutane`,
    // Gida 13
    `1. Mutun yanada yawan dangi ko family arayuwanshi\n2. Zakasha maganin gargajiya ko kwayan bature\n3. Zakuyi rigima akan kayan gado da yan’uwanka\n4. Zaka zauna awurare daban daban\n5. Kataba yin noma ko kiwo ko zakai`,
    // Gida 14
    `1. Abincin gidanka yakare ko yakusan karewa\n2. Kana fama da ciwon basir ko sanyi\n3. Za’akawoma sako awannan rana akusa\n4. Wani abu zai faru a’inda kake aita magana akai\n5. Kafi karfin makiyanka dan sunrasa yadda zasui`,
    // Gida 15
    `1. Za’akama wani kaje kai belin shi\n2. Kunada yaro maraji agida ko adangi\n3. Kataba karantarda wani ilimi arayuwanka\n4. Kana kokari wajan bin allah ko ibada\n5. Za’anema kaje kabada sheda amma bazakajeba`,
    // Gida 16
    `1. Zaka samu jama’a sosai arayuwanka\n2. Allah zaisa jama’a suhidimtama sosai\n3. Zaka mallaki mahalli mai girma arayuwanka.`,
];


const generateIzaNazalaData = (): Record<string, string[]> => {
  const data: Record<string, string[]> = {};
  FIGURE_LIST.forEach(figure => {
    if (figure.name === "Kausaji") {
      data[figure.name] = kausajiData;
    } else if (figure.name === "Rahika") {
        data[figure.name] = rahikaData;
    } else if (figure.name === "Rayya") {
        data[figure.name] = rayyaData;
    } else if (figure.name === "Bayada") {
        data[figure.name] = bayadaData;
    } else if (figure.name === "Dariki") {
        data[figure.name] = darikiData;
    } else if (figure.name === "Kabla Karija") {
        data[figure.name] = kablaKarijaData;
    } else if (figure.name === "Humra") {
        data[figure.name] = humraData;
    } else if (figure.name === "Inkis") {
        data[figure.name] = inkisData;
    } else if (figure.name === "Nasara Karija") {
        data[figure.name] = nasaraKarijaData;
    } else if (figure.name === "Iskafi") {
        data[figure.name] = iskafiData;
    } else if (figure.name === "Ijtima'i") {
        data[figure.name] = ijtimaiData;
    } else if (figure.name === "Nasara Dakila") {
        data[figure.name] = nasaraDakilaData;
    } else if (figure.name === "Sa'ili") {
        data[figure.name] = sa_iliData;
    } else if (figure.name === "Nakiyya") {
        data[figure.name] = nakiyyaData;
    } else if (figure.name === "Alkali") {
        data[figure.name] = alkaliData;
    } else if (figure.name === "Jama'a") {
        data[figure.name] = jama_aData;
    }
  });
  return data;
};

export const IZA_NAZALA_DATA = generateIzaNazalaData();