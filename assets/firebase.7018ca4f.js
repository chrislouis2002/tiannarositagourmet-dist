import{w as qe,a as Io,o as xi,i as ef,g as kn,a9 as tf,r as Ue,c as ne,a6 as nf,aa as Xu,_ as rf,M as sf,n as Jt,U as of,a7 as af,f as cf,h as re,N as tr,T as uf,ab as lf,R as hf,K as gc}from"./index.cb7ddad8.js";import{l as _c,k as df,h as rr,c as Yu}from"./QBtn.1fda2045.js";import{u as Zu,a as el}from"./use-dark.d87e6965.js";function ff({validate:n,resetValidation:e,requiresQForm:t}){const r=ef(tf,!1);if(r!==!1){const{props:i,proxy:o}=kn();Object.assign(o,{validate:n,resetValidation:e}),qe(()=>i.disable,a=>{a===!0?(typeof e=="function"&&e(),r.unbindComponent(o)):r.bindComponent(o)}),Io(()=>{i.disable!==!0&&r.bindComponent(o)}),xi(()=>{i.disable!==!0&&r.unbindComponent(o)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const yc=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Ec=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,vc=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Xr=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Yr=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,Ns={date:n=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(n),time:n=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(n),fulltime:n=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(n),timeOrFulltime:n=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(n),email:n=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n),hexColor:n=>yc.test(n),hexaColor:n=>Ec.test(n),hexOrHexaColor:n=>vc.test(n),rgbColor:n=>Xr.test(n),rgbaColor:n=>Yr.test(n),rgbOrRgbaColor:n=>Xr.test(n)||Yr.test(n),hexOrRgbColor:n=>yc.test(n)||Xr.test(n),hexaOrRgbaColor:n=>Ec.test(n)||Yr.test(n),anyColor:n=>vc.test(n)||Xr.test(n)||Yr.test(n)},pf=[!0,!1,"ondemand"],mf={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:n=>pf.includes(n)}};function gf(n,e){const{props:t,proxy:r}=kn(),i=Ue(!1),o=Ue(null),a=Ue(null);ff({validate:V,resetValidation:S});let u=0,h;const d=ne(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length>0),m=ne(()=>t.disable!==!0&&d.value===!0),E=ne(()=>t.error===!0||i.value===!0),I=ne(()=>typeof t.errorMessage=="string"&&t.errorMessage.length>0?t.errorMessage:o.value);qe(()=>t.modelValue,()=>{O()}),qe(()=>t.reactiveRules,F=>{F===!0?h===void 0&&(h=qe(()=>t.rules,()=>{O(!0)})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),qe(n,F=>{F===!0?a.value===null&&(a.value=!1):a.value===!1&&(a.value=!0,m.value===!0&&t.lazyRules!=="ondemand"&&e.value===!1&&P())});function S(){u++,e.value=!1,a.value=null,i.value=!1,o.value=null,P.cancel()}function V(F=t.modelValue){if(m.value!==!0)return!0;const B=++u,H=e.value!==!0?()=>{a.value=!0}:()=>{},K=(C,y)=>{C===!0&&H(),i.value=C,o.value=y||null,e.value=!1},J=[];for(let C=0;C<t.rules.length;C++){const y=t.rules[C];let p;if(typeof y=="function"?p=y(F,Ns):typeof y=="string"&&Ns[y]!==void 0&&(p=Ns[y](F)),p===!1||typeof p=="string")return K(!0,p),!1;p!==!0&&p!==void 0&&J.push(p)}return J.length===0?(K(!1),!0):(e.value=!0,Promise.all(J).then(C=>{if(C===void 0||Array.isArray(C)===!1||C.length===0)return B===u&&K(!1),!0;const y=C.find(p=>p===!1||typeof p=="string");return B===u&&K(y!==void 0,y),y===void 0},C=>(B===u&&(console.error(C),K(!0)),!1)))}function O(F){m.value===!0&&t.lazyRules!=="ondemand"&&(a.value===!0||t.lazyRules!==!0&&F!==!0)&&P()}const P=nf(V,0);return xi(()=>{h!==void 0&&h(),P.cancel()}),Object.assign(r,{resetValidation:S,validate:V}),Xu(r,"hasError",()=>E.value),{isDirtyModel:a,hasRules:d,hasError:E,errorMessage:I,validate:V,resetValidation:S}}const Tc=/^on[A-Z]/;function _f(n,e){const t={listeners:Ue({}),attributes:Ue({})};function r(){const i={},o={};for(const a in n)a!=="class"&&a!=="style"&&Tc.test(a)===!1&&(i[a]=n[a]);for(const a in e.props)Tc.test(a)===!0&&(o[a]=e.props[a]);t.attributes.value=i,t.listeners.value=o}return rf(r),r(),t}let Os,Zr=0;const Ae=new Array(256);for(let n=0;n<256;n++)Ae[n]=(n+256).toString(16).substring(1);const yf=(()=>{const n=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(n!==void 0){if(n.randomBytes!==void 0)return n.randomBytes;if(n.getRandomValues!==void 0)return e=>{const t=new Uint8Array(e);return n.getRandomValues(t),t}}return e=>{const t=[];for(let r=e;r>0;r--)t.push(Math.floor(Math.random()*256));return t}})(),Ic=4096;function Ef(){(Os===void 0||Zr+16>Ic)&&(Zr=0,Os=yf(Ic));const n=Array.prototype.slice.call(Os,Zr,Zr+=16);return n[6]=n[6]&15|64,n[8]=n[8]&63|128,Ae[n[0]]+Ae[n[1]]+Ae[n[2]]+Ae[n[3]]+"-"+Ae[n[4]]+Ae[n[5]]+"-"+Ae[n[6]]+Ae[n[7]]+"-"+Ae[n[8]]+Ae[n[9]]+"-"+Ae[n[10]]+Ae[n[11]]+Ae[n[12]]+Ae[n[13]]+Ae[n[14]]+Ae[n[15]]}let Xt=[],gr=[];function tl(n){gr=gr.filter(e=>e!==n)}function Wv(n){tl(n),gr.push(n)}function Kv(n){tl(n),gr.length===0&&Xt.length>0&&(Xt[Xt.length-1](),Xt=[])}function nl(n){gr.length===0?n():Xt.push(n)}function vf(n){Xt=Xt.filter(e=>e!==n)}function Gs(n){return n===void 0?`f_${Ef()}`:n}function Qs(n){return n!=null&&(""+n).length>0}const Tf={...Zu,...mf,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},If=["update:modelValue","clear","focus","blur","popupShow","popupHide"];function wf(){const{props:n,attrs:e,proxy:t,vnode:r}=kn();return{isDark:el(n,t.$q),editable:ne(()=>n.disable!==!0&&n.readonly!==!0),innerLoading:Ue(!1),focused:Ue(!1),hasPopupOpen:!1,splitAttrs:_f(e,r),targetUid:Ue(Gs(n.for)),rootRef:Ue(null),targetRef:Ue(null),controlRef:Ue(null)}}function Af(n){const{props:e,emit:t,slots:r,attrs:i,proxy:o}=kn(),{$q:a}=o;let u;n.hasValue===void 0&&(n.hasValue=ne(()=>Qs(e.modelValue))),n.emitValue===void 0&&(n.emitValue=D=>{t("update:modelValue",D)}),n.controlEvents===void 0&&(n.controlEvents={onFocusin:g,onFocusout:T}),Object.assign(n,{clearValue:v,onControlFocusin:g,onControlFocusout:T,focus:y}),n.computedCounter===void 0&&(n.computedCounter=ne(()=>{if(e.counter!==!1){const D=typeof e.modelValue=="string"||typeof e.modelValue=="number"?(""+e.modelValue).length:Array.isArray(e.modelValue)===!0?e.modelValue.length:0,$=e.maxlength!==void 0?e.maxlength:e.maxValues;return D+($!==void 0?" / "+$:"")}}));const{isDirtyModel:h,hasRules:d,hasError:m,errorMessage:E,resetValidation:I}=gf(n.focused,n.innerLoading),S=n.floatingLabel!==void 0?ne(()=>e.stackLabel===!0||n.focused.value===!0||n.floatingLabel.value===!0):ne(()=>e.stackLabel===!0||n.focused.value===!0||n.hasValue.value===!0),V=ne(()=>e.bottomSlots===!0||e.hint!==void 0||d.value===!0||e.counter===!0||e.error!==null),O=ne(()=>e.filled===!0?"filled":e.outlined===!0?"outlined":e.borderless===!0?"borderless":e.standout?"standout":"standard"),P=ne(()=>`q-field row no-wrap items-start q-field--${O.value}`+(n.fieldClass!==void 0?` ${n.fieldClass.value}`:"")+(e.rounded===!0?" q-field--rounded":"")+(e.square===!0?" q-field--square":"")+(S.value===!0?" q-field--float":"")+(B.value===!0?" q-field--labeled":"")+(e.dense===!0?" q-field--dense":"")+(e.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(n.isDark.value===!0?" q-field--dark":"")+(n.getControl===void 0?" q-field--auto-height":"")+(n.focused.value===!0?" q-field--focused":"")+(m.value===!0?" q-field--error":"")+(m.value===!0||n.focused.value===!0?" q-field--highlighted":"")+(e.hideBottomSpace!==!0&&V.value===!0?" q-field--with-bottom":"")+(e.disable===!0?" q-field--disabled":e.readonly===!0?" q-field--readonly":"")),F=ne(()=>"q-field__control relative-position row no-wrap"+(e.bgColor!==void 0?` bg-${e.bgColor}`:"")+(m.value===!0?" text-negative":typeof e.standout=="string"&&e.standout.length>0&&n.focused.value===!0?` ${e.standout}`:e.color!==void 0?` text-${e.color}`:"")),B=ne(()=>e.labelSlot===!0||e.label!==void 0),H=ne(()=>"q-field__label no-pointer-events absolute ellipsis"+(e.labelColor!==void 0&&m.value!==!0?` text-${e.labelColor}`:"")),K=ne(()=>({id:n.targetUid.value,editable:n.editable.value,focused:n.focused.value,floatingLabel:S.value,modelValue:e.modelValue,emitValue:n.emitValue})),J=ne(()=>{const D={for:n.targetUid.value};return e.disable===!0?D["aria-disabled"]="true":e.readonly===!0&&(D["aria-readonly"]="true"),D});qe(()=>e.for,D=>{n.targetUid.value=Gs(D)});function C(){const D=document.activeElement;let $=n.targetRef!==void 0&&n.targetRef.value;$&&(D===null||D.id!==n.targetUid.value)&&($.hasAttribute("tabindex")===!0||($=$.querySelector("[tabindex]")),$&&$!==D&&$.focus({preventScroll:!0}))}function y(){nl(C)}function p(){vf(C);const D=document.activeElement;D!==null&&n.rootRef.value.contains(D)&&D.blur()}function g(D){clearTimeout(u),n.editable.value===!0&&n.focused.value===!1&&(n.focused.value=!0,t("focus",D))}function T(D,$){clearTimeout(u),u=setTimeout(()=>{document.hasFocus()===!0&&(n.hasPopupOpen===!0||n.controlRef===void 0||n.controlRef.value===null||n.controlRef.value.contains(document.activeElement)!==!1)||(n.focused.value===!0&&(n.focused.value=!1,t("blur",D)),$!==void 0&&$())})}function v(D){sf(D),a.platform.is.mobile!==!0?(n.targetRef!==void 0&&n.targetRef.value||n.rootRef.value).focus():n.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),e.type==="file"&&(n.inputRef.value.value=null),t("update:modelValue",null),t("clear",e.modelValue),Jt(()=>{I(),a.platform.is.mobile!==!0&&(h.value=!1)})}function w(){const D=[];return r.prepend!==void 0&&D.push(re("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:tr},r.prepend())),D.push(re("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},_())),m.value===!0&&e.noErrorIcon===!1&&D.push(ce("error",[re(_c,{name:a.iconSet.field.error,color:"negative"})])),e.loading===!0||n.innerLoading.value===!0?D.push(ce("inner-loading-append",r.loading!==void 0?r.loading():[re(df,{color:e.color})])):e.clearable===!0&&n.hasValue.value===!0&&n.editable.value===!0&&D.push(ce("inner-clearable-append",[re(_c,{class:"q-field__focusable-action",tag:"button",name:e.clearIcon||a.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:v})])),r.append!==void 0&&D.push(re("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:tr},r.append())),n.getInnerAppend!==void 0&&D.push(ce("inner-append",n.getInnerAppend())),n.getControlChild!==void 0&&D.push(n.getControlChild()),D}function _(){const D=[];return e.prefix!==void 0&&e.prefix!==null&&D.push(re("div",{class:"q-field__prefix no-pointer-events row items-center"},e.prefix)),n.getShadowControl!==void 0&&n.hasShadow.value===!0&&D.push(n.getShadowControl()),n.getControl!==void 0?D.push(n.getControl()):r.rawControl!==void 0?D.push(r.rawControl()):r.control!==void 0&&D.push(re("div",{ref:n.targetRef,class:"q-field__native row",tabindex:-1,...n.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0},r.control(K.value))),B.value===!0&&D.push(re("div",{class:H.value},rr(r.label,e.label))),e.suffix!==void 0&&e.suffix!==null&&D.push(re("div",{class:"q-field__suffix no-pointer-events row items-center"},e.suffix)),D.concat(rr(r.default))}function Q(){let D,$;m.value===!0?E.value!==null?(D=[re("div",{role:"alert"},E.value)],$=`q--slot-error-${E.value}`):(D=rr(r.error),$="q--slot-error"):(e.hideHint!==!0||n.focused.value===!0)&&(e.hint!==void 0?(D=[re("div",e.hint)],$=`q--slot-hint-${e.hint}`):(D=rr(r.hint),$="q--slot-hint"));const _e=e.counter===!0||r.counter!==void 0;if(e.hideBottomSpace===!0&&_e===!1&&D===void 0)return;const Me=re("div",{key:$,class:"q-field__messages col"},D);return re("div",{class:"q-field__bottom row items-start q-field__bottom--"+(e.hideBottomSpace!==!0?"animated":"stale"),onClick:tr},[e.hideBottomSpace===!0?Me:re(uf,{name:"q-transition--field-message"},()=>Me),_e===!0?re("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():n.computedCounter.value):null])}function ce(D,$){return $===null?null:re("div",{key:D,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},$)}let Pe=!1;return of(()=>{Pe=!0}),af(()=>{Pe===!0&&e.autofocus===!0&&o.focus()}),Io(()=>{cf.value===!0&&e.for===void 0&&(n.targetUid.value=Gs()),e.autofocus===!0&&o.focus()}),xi(()=>{clearTimeout(u)}),Object.assign(o,{focus:y,blur:p}),function(){const $=n.getControl===void 0&&r.control===void 0?{...n.splitAttrs.attributes.value,"data-autofocus":e.autofocus===!0||void 0,...J.value}:J.value;return re("label",{ref:n.rootRef,class:[P.value,i.class],style:i.style,...$},[r.before!==void 0?re("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:tr},r.before()):null,re("div",{class:"q-field__inner relative-position col self-stretch"},[re("div",{ref:n.controlRef,class:F.value,tabindex:-1,...n.controlEvents},w()),V.value===!0?Q():null]),r.after!==void 0?re("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:tr},r.after()):null])}}const wc={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},gi={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:n=>n.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:n=>n.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:n=>n.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:n=>n.toLocaleLowerCase()}},rl=Object.keys(gi);rl.forEach(n=>{gi[n].regex=new RegExp(gi[n].pattern)});const Rf=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+rl.join("")+"])|(.)","g"),Ac=/[.*+?^${}()|[\]\\]/g,Ee=String.fromCharCode(1),Sf={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Cf(n,e,t,r){let i,o,a,u;const h=Ue(null),d=Ue(E());function m(){return n.autogrow===!0||["textarea","text","search","url","tel","password"].includes(n.type)}qe(()=>n.type+n.autogrow,S),qe(()=>n.mask,C=>{if(C!==void 0)V(d.value,!0);else{const y=K(d.value);S(),n.modelValue!==y&&e("update:modelValue",y)}}),qe(()=>n.fillMask+n.reverseFillMask,()=>{h.value===!0&&V(d.value,!0)}),qe(()=>n.unmaskedValue,()=>{h.value===!0&&V(d.value)});function E(){if(S(),h.value===!0){const C=B(K(n.modelValue));return n.fillMask!==!1?J(C):C}return n.modelValue}function I(C){if(C<i.length)return i.slice(-C);let y="",p=i;const g=p.indexOf(Ee);if(g>-1){for(let T=C-p.length;T>0;T--)y+=Ee;p=p.slice(0,g)+y+p.slice(g)}return p}function S(){if(h.value=n.mask!==void 0&&n.mask.length>0&&m(),h.value===!1){u=void 0,i="",o="";return}const C=wc[n.mask]===void 0?n.mask:wc[n.mask],y=typeof n.fillMask=="string"&&n.fillMask.length>0?n.fillMask.slice(0,1):"_",p=y.replace(Ac,"\\$&"),g=[],T=[],v=[];let w=n.reverseFillMask===!0,_="",Q="";C.replace(Rf,($,_e,Me,M,le)=>{if(M!==void 0){const de=gi[M];v.push(de),Q=de.negate,w===!0&&(T.push("(?:"+Q+"+)?("+de.pattern+"+)?(?:"+Q+"+)?("+de.pattern+"+)?"),w=!1),T.push("(?:"+Q+"+)?("+de.pattern+")?")}else if(Me!==void 0)_="\\"+(Me==="\\"?"":Me),v.push(Me),g.push("([^"+_+"]+)?"+_+"?");else{const de=_e!==void 0?_e:le;_=de==="\\"?"\\\\\\\\":de.replace(Ac,"\\\\$&"),v.push(de),g.push("([^"+_+"]+)?"+_+"?")}});const ce=new RegExp("^"+g.join("")+"("+(_===""?".":"[^"+_+"]")+"+)?"+(_===""?"":"["+_+"]*")+"$"),Pe=T.length-1,D=T.map(($,_e)=>_e===0&&n.reverseFillMask===!0?new RegExp("^"+p+"*"+$):_e===Pe?new RegExp("^"+$+"("+(Q===""?".":Q)+"+)?"+(n.reverseFillMask===!0?"$":p+"*")):new RegExp("^"+$));a=v,u=$=>{const _e=ce.exec(n.reverseFillMask===!0?$:$.slice(0,v.length));_e!==null&&($=_e.slice(1).join(""));const Me=[],M=D.length;for(let le=0,de=$;le<M;le++){const Ke=D[le].exec(de);if(Ke===null)break;de=de.slice(Ke.shift().length),Me.push(...Ke)}return Me.length>0?Me.join(""):$},i=v.map($=>typeof $=="string"?$:Ee).join(""),o=i.split(Ee).join(y)}function V(C,y,p){const g=r.value,T=g.selectionEnd,v=g.value.length-T,w=K(C);y===!0&&S();const _=B(w),Q=n.fillMask!==!1?J(_):_,ce=d.value!==Q;g.value!==Q&&(g.value=Q),ce===!0&&(d.value=Q),document.activeElement===g&&Jt(()=>{if(Q===o){const D=n.reverseFillMask===!0?o.length:0;g.setSelectionRange(D,D,"forward");return}if(p==="insertFromPaste"&&n.reverseFillMask!==!0){const D=T-1;P.right(g,D,D);return}if(["deleteContentBackward","deleteContentForward"].indexOf(p)>-1){const D=n.reverseFillMask===!0?T===0?Q.length>_.length?1:0:Math.max(0,Q.length-(Q===o?0:Math.min(_.length,v)+1))+1:T;g.setSelectionRange(D,D,"forward");return}if(n.reverseFillMask===!0)if(ce===!0){const D=Math.max(0,Q.length-(Q===o?0:Math.min(_.length,v+1)));D===1&&T===1?g.setSelectionRange(D,D,"forward"):P.rightReverse(g,D,D)}else{const D=Q.length-v;g.setSelectionRange(D,D,"backward")}else if(ce===!0){const D=Math.max(0,i.indexOf(Ee),Math.min(_.length,T)-1);P.right(g,D,D)}else{const D=T-1;P.right(g,D,D)}});const Pe=n.unmaskedValue===!0?K(Q):Q;String(n.modelValue)!==Pe&&t(Pe,!0)}function O(C,y,p){const g=B(K(C.value));y=Math.max(0,i.indexOf(Ee),Math.min(g.length,y)),C.setSelectionRange(y,p,"forward")}const P={left(C,y,p,g){const T=i.slice(y-1).indexOf(Ee)===-1;let v=Math.max(0,y-1);for(;v>=0;v--)if(i[v]===Ee){y=v,T===!0&&y++;break}if(v<0&&i[y]!==void 0&&i[y]!==Ee)return P.right(C,0,0);y>=0&&C.setSelectionRange(y,g===!0?p:y,"backward")},right(C,y,p,g){const T=C.value.length;let v=Math.min(T,p+1);for(;v<=T;v++)if(i[v]===Ee){p=v;break}else i[v-1]===Ee&&(p=v);if(v>T&&i[p-1]!==void 0&&i[p-1]!==Ee)return P.left(C,T,T);C.setSelectionRange(g?y:p,p,"forward")},leftReverse(C,y,p,g){const T=I(C.value.length);let v=Math.max(0,y-1);for(;v>=0;v--)if(T[v-1]===Ee){y=v;break}else if(T[v]===Ee&&(y=v,v===0))break;if(v<0&&T[y]!==void 0&&T[y]!==Ee)return P.rightReverse(C,0,0);y>=0&&C.setSelectionRange(y,g===!0?p:y,"backward")},rightReverse(C,y,p,g){const T=C.value.length,v=I(T),w=v.slice(0,p+1).indexOf(Ee)===-1;let _=Math.min(T,p+1);for(;_<=T;_++)if(v[_-1]===Ee){p=_,p>0&&w===!0&&p--;break}if(_>T&&v[p-1]!==void 0&&v[p-1]!==Ee)return P.leftReverse(C,T,T);C.setSelectionRange(g===!0?y:p,p,"forward")}};function F(C){if(e("keydown",C),lf(C)===!0)return;const y=r.value,p=y.selectionStart,g=y.selectionEnd;if(C.keyCode===37||C.keyCode===39){const T=P[(C.keyCode===39?"right":"left")+(n.reverseFillMask===!0?"Reverse":"")];C.preventDefault(),T(y,p,g,C.shiftKey)}else C.keyCode===8&&n.reverseFillMask!==!0&&p===g?P.left(y,p,g,!0):C.keyCode===46&&n.reverseFillMask===!0&&p===g&&P.rightReverse(y,p,g,!0)}function B(C){if(C==null||C==="")return"";if(n.reverseFillMask===!0)return H(C);const y=a;let p=0,g="";for(let T=0;T<y.length;T++){const v=C[p],w=y[T];if(typeof w=="string")g+=w,v===w&&p++;else if(v!==void 0&&w.regex.test(v))g+=w.transform!==void 0?w.transform(v):v,p++;else return g}return g}function H(C){const y=a,p=i.indexOf(Ee);let g=C.length-1,T="";for(let v=y.length-1;v>=0&&g>-1;v--){const w=y[v];let _=C[g];if(typeof w=="string")T=w+T,_===w&&g--;else if(_!==void 0&&w.regex.test(_))do T=(w.transform!==void 0?w.transform(_):_)+T,g--,_=C[g];while(p===v&&_!==void 0&&w.regex.test(_));else return T}return T}function K(C){return typeof C!="string"||u===void 0?typeof C=="number"?u(""+C):C:u(C)}function J(C){return o.length-C.length<=0?C:n.reverseFillMask===!0&&C.length>0?o.slice(0,-C.length)+C:C+o.slice(C.length)}return{innerValue:d,hasMask:h,moveCursorForPaste:O,updateMaskValue:V,onMaskedKeydown:F}}const bf={name:String};function Gv(n={}){return(e,t,r)=>{e[t](re("input",{class:"hidden"+(r||""),...n.value}))}}function Pf(n){return ne(()=>n.name||n.for)}function kf(n,e){function t(){const r=n.modelValue;try{const i="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(r)===r&&("length"in r?Array.from(r):[r]).forEach(o=>{i.items.add(o)}),{files:i.files}}catch{return{files:void 0}}}return e===!0?ne(()=>{if(n.type==="file")return t()}):ne(t)}const Vf=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Df=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Nf=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Of=/[a-z0-9_ -]$/i;function Mf(n){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,n(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(hf.is.firefox===!0?Of.test(t.data)===!1:Vf.test(t.data)===!0||Df.test(t.data)===!0||Nf.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}var Qv=Yu({name:"QInput",inheritAttrs:!1,props:{...Tf,...Sf,...bf,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...If,"paste","change","keydown","animationend"],setup(n,{emit:e,attrs:t}){const{proxy:r}=kn(),{$q:i}=r,o={};let a=NaN,u,h,d,m;const E=Ue(null),I=Pf(n),{innerValue:S,hasMask:V,moveCursorForPaste:O,updateMaskValue:P,onMaskedKeydown:F}=Cf(n,e,ce,E),B=kf(n,!0),H=ne(()=>Qs(S.value)),K=Mf(_),J=wf(),C=ne(()=>n.type==="textarea"||n.autogrow===!0),y=ne(()=>C.value===!0||["text","search","url","tel","password"].includes(n.type)),p=ne(()=>{const M={...J.splitAttrs.listeners.value,onInput:_,onPaste:w,onChange:D,onBlur:$,onFocus:gc};return M.onCompositionstart=M.onCompositionupdate=M.onCompositionend=K,V.value===!0&&(M.onKeydown=F),n.autogrow===!0&&(M.onAnimationend=Q),M}),g=ne(()=>{const M={tabindex:0,"data-autofocus":n.autofocus===!0||void 0,rows:n.type==="textarea"?6:void 0,"aria-label":n.label,name:I.value,...J.splitAttrs.attributes.value,id:J.targetUid.value,maxlength:n.maxlength,disabled:n.disable===!0,readonly:n.readonly===!0};return C.value===!1&&(M.type=n.type),n.autogrow===!0&&(M.rows=1),M});qe(()=>n.type,()=>{E.value&&(E.value.value=n.modelValue)}),qe(()=>n.modelValue,M=>{if(V.value===!0){if(h===!0&&(h=!1,String(M)===a))return;P(M)}else S.value!==M&&(S.value=M,n.type==="number"&&o.hasOwnProperty("value")===!0&&(u===!0?u=!1:delete o.value));n.autogrow===!0&&Jt(Pe)}),qe(()=>n.autogrow,M=>{M===!0?Jt(Pe):E.value!==null&&t.rows>0&&(E.value.style.height="auto")}),qe(()=>n.dense,()=>{n.autogrow===!0&&Jt(Pe)});function T(){nl(()=>{const M=document.activeElement;E.value!==null&&E.value!==M&&(M===null||M.id!==J.targetUid.value)&&E.value.focus({preventScroll:!0})})}function v(){E.value!==null&&E.value.select()}function w(M){if(V.value===!0&&n.reverseFillMask!==!0){const le=M.target;O(le,le.selectionStart,le.selectionEnd)}e("paste",M)}function _(M){if(!M||!M.target)return;if(n.type==="file"){e("update:modelValue",M.target.files);return}const le=M.target.value;if(M.target.qComposing===!0){o.value=le;return}if(V.value===!0)P(le,!1,M.inputType);else if(ce(le),y.value===!0&&M.target===document.activeElement){const{selectionStart:de,selectionEnd:Ke}=M.target;de!==void 0&&Ke!==void 0&&Jt(()=>{M.target===document.activeElement&&le.indexOf(M.target.value)===0&&M.target.setSelectionRange(de,Ke)})}n.autogrow===!0&&Pe()}function Q(M){e("animationend",M),Pe()}function ce(M,le){m=()=>{n.type!=="number"&&o.hasOwnProperty("value")===!0&&delete o.value,n.modelValue!==M&&a!==M&&(a=M,le===!0&&(h=!0),e("update:modelValue",M),Jt(()=>{a===M&&(a=NaN)})),m=void 0},n.type==="number"&&(u=!0,o.value=M),n.debounce!==void 0?(clearTimeout(d),o.value=M,d=setTimeout(m,n.debounce)):m()}function Pe(){requestAnimationFrame(()=>{const M=E.value;if(M!==null){const le=M.parentNode.style,{overflow:de}=M.style;i.platform.is.firefox!==!0&&(M.style.overflow="hidden"),M.style.height="1px",le.marginBottom=M.scrollHeight-1+"px",M.style.height=M.scrollHeight+"px",M.style.overflow=de,le.marginBottom=""}})}function D(M){K(M),clearTimeout(d),m!==void 0&&m(),e("change",M.target.value)}function $(M){M!==void 0&&gc(M),clearTimeout(d),m!==void 0&&m(),u=!1,h=!1,delete o.value,n.type!=="file"&&setTimeout(()=>{E.value!==null&&(E.value.value=S.value!==void 0?S.value:"")})}function _e(){return o.hasOwnProperty("value")===!0?o.value:S.value!==void 0?S.value:""}xi(()=>{$()}),Io(()=>{n.autogrow===!0&&Pe()}),Object.assign(J,{innerValue:S,fieldClass:ne(()=>`q-${C.value===!0?"textarea":"input"}`+(n.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:ne(()=>n.type!=="file"&&typeof n.shadowText=="string"&&n.shadowText.length>0),inputRef:E,emitValue:ce,hasValue:H,floatingLabel:ne(()=>H.value===!0||Qs(n.displayValue)),getControl:()=>re(C.value===!0?"textarea":"input",{ref:E,class:["q-field__native q-placeholder",n.inputClass],style:n.inputStyle,...g.value,...p.value,...n.type!=="file"?{value:_e()}:B.value}),getShadowControl:()=>re("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(C.value===!0?"":" text-no-wrap")},[re("span",{class:"invisible"},_e()),re("span",n.shadowText)])});const Me=Af(J);return Object.assign(r,{focus:T,select:v,getNativeElement:()=>E.value}),Xu(r,"nativeEl",()=>E.value),Me}}),Jv=Yu({name:"QCard",props:{...Zu,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(n,{slots:e}){const{proxy:{$q:t}}=kn(),r=el(n,t),i=ne(()=>"q-card"+(r.value===!0?" q-card--dark q-dark":"")+(n.bordered===!0?" q-card--bordered":"")+(n.square===!0?" q-card--square no-border-radius":"")+(n.flat===!0?" q-card--flat no-shadow":""));return()=>re(n.tag,{class:i.value},rr(e.default))}});const xf=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],a=n[t++],u=n[t++],h=((i&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(h>>10)),e[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],a=i+1<n.length,u=a?n[i+1]:0,h=i+2<n.length,d=h?n[i+2]:0,m=o>>2,E=(o&3)<<4|u>>4;let I=(u&15)<<2|d>>6,S=d&63;h||(S=64,a||(I=64)),r.push(t[m],t[E],t[I],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(il(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Lf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],u=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const E=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||u==null||d==null||E==null)throw new Ff;const I=o<<2|u>>4;if(r.push(I),d!==64){const S=u<<4&240|d>>2;if(r.push(S),E!==64){const V=d<<6&192|E;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Ff extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Uf=function(n){const e=il(n);return sl.encodeByteArray(e,!0)},_i=function(n){return Uf(n).replace(/\./g,"")},ol=function(n){try{return sl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf=()=>Bf().__FIREBASE_DEFAULTS__,jf=()=>{if(typeof process=="undefined"||typeof process.env=="undefined")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$f=()=>{if(typeof document=="undefined")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ol(n[1]);return e&&JSON.parse(e)},Li=()=>{try{return xf()||qf()||jf()||$f()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},al=n=>{var e,t;return(t=(e=Li())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},zf=n=>{const e=al(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},cl=()=>{var n;return(n=Li())==null?void 0:n.config},ul=n=>{var e;return(e=Li())==null?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ll(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n},u="";return[_i(JSON.stringify(t)),_i(JSON.stringify(a)),u].join(".")}const lr={};function Kf(){const n={prod:[],emulator:[]};for(const e of Object.keys(lr))lr[e]?n.emulator.push(e):n.prod.push(e);return n}function Gf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Rc=!1;function hl(n,e){if(typeof window=="undefined"||typeof document=="undefined"||!Vn(window.location.host)||lr[n]===e||lr[n]||Rc)return;lr[n]=e;function t(I){return`__firebase__banner__${I}`}const r="__firebase__banner",o=Kf().prod.length>0;function a(){const I=document.getElementById(r);I&&I.remove()}function u(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function h(I,S){I.setAttribute("width","24"),I.setAttribute("id",S),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function d(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{Rc=!0,a()},I}function m(I,S){I.setAttribute("id",S),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function E(){const I=Gf(r),S=t("text"),V=document.getElementById(S)||document.createElement("span"),O=t("learnmore"),P=document.getElementById(O)||document.createElement("a"),F=t("preprendIcon"),B=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const H=I.element;u(H),m(P,O);const K=d();h(B,F),H.append(B,V,P,K),document.body.appendChild(H)}o?(V.innerText="Preview backend disconnected.",B.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(B.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",E):E()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qf(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Oe())}function Jf(){var e;const n=(e=Li())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Xf(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function Yf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Zf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ep(){const n=Oe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function tp(){return!Jf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function np(){try{return typeof indexedDB=="object"}catch{return!1}}function rp(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)==null?void 0:o.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ip="FirebaseError";class gt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ip,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],a=o?sp(o,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new gt(i,u,r)}}function sp(n,e){return n.replace(op,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const op=/\{\$([^}]+)}/g;function ap(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function tn(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],a=e[i];if(Sc(o)&&Sc(a)){if(!tn(o,a))return!1}else if(o!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function sr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function cp(n,e){const t=new up(n,e);return t.subscribe.bind(t)}class up{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");lp(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ms),i.error===void 0&&(i.error=Ms),i.complete===void 0&&(i.complete=Ms);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lp(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ms(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(n){return n&&n._delegate?n._delegate:n}class nn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Hf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var i;const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(i=e==null?void 0:e.optional)!=null?i:!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fp(e))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Qt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qt){return this.instances.has(e)}getOptions(e=Qt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(i)}return i}onInit(e,t){var a;const r=this.normalizeInstanceIdentifier(t),i=(a=this.onInitCallbacks.get(r))!=null?a:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qt){return this.component?this.component.multipleInstances?e:Qt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dp(n){return n===Qt?void 0:n}function fp(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new hp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const mp={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},gp=X.INFO,_p={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},yp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=_p[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wo{constructor(e){this.name=e,this._logLevel=gp,this._logHandler=yp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Ep=(n,e)=>e.some(t=>n instanceof t);let Cc,bc;function vp(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tp(){return bc||(bc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dl=new WeakMap,Js=new WeakMap,fl=new WeakMap,xs=new WeakMap,Ao=new WeakMap;function Ip(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{t(Pt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&dl.set(t,n)}).catch(()=>{}),Ao.set(e,n),e}function wp(n){if(Js.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});Js.set(n,e)}let Xs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Js.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Pt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ap(n){Xs=n(Xs)}function Rp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ls(this),e,...t);return fl.set(r,e.sort?e.sort():[e]),Pt(r)}:Tp().includes(n)?function(...e){return n.apply(Ls(this),e),Pt(dl.get(this))}:function(...e){return Pt(n.apply(Ls(this),e))}}function Sp(n){return typeof n=="function"?Rp(n):(n instanceof IDBTransaction&&wp(n),Ep(n,vp())?new Proxy(n,Xs):n)}function Pt(n){if(n instanceof IDBRequest)return Ip(n);if(xs.has(n))return xs.get(n);const e=Sp(n);return e!==n&&(xs.set(n,e),Ao.set(e,n)),e}const Ls=n=>Ao.get(n);function Cp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const a=indexedDB.open(n,e),u=Pt(a);return r&&a.addEventListener("upgradeneeded",h=>{r(Pt(a.result),h.oldVersion,h.newVersion,Pt(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),i&&h.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const bp=["get","getKey","getAll","getAllKeys","count"],Pp=["put","add","delete","clear"],Fs=new Map;function Pc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fs.get(e))return Fs.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Pp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bp.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,i?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),i&&h.done]))[0]};return Fs.set(e,o),o}Ap(n=>({...n,get:(e,t,r)=>Pc(e,t)||n.get(e,t,r),has:(e,t)=>!!Pc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Vp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Vp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ys="@firebase/app",kc="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new wo("@firebase/app"),Dp="@firebase/app-compat",Np="@firebase/analytics-compat",Op="@firebase/analytics",Mp="@firebase/app-check-compat",xp="@firebase/app-check",Lp="@firebase/auth",Fp="@firebase/auth-compat",Up="@firebase/database",Bp="@firebase/data-connect",qp="@firebase/database-compat",jp="@firebase/functions",$p="@firebase/functions-compat",zp="@firebase/installations",Hp="@firebase/installations-compat",Wp="@firebase/messaging",Kp="@firebase/messaging-compat",Gp="@firebase/performance",Qp="@firebase/performance-compat",Jp="@firebase/remote-config",Xp="@firebase/remote-config-compat",Yp="@firebase/storage",Zp="@firebase/storage-compat",em="@firebase/firestore",tm="@firebase/ai",nm="@firebase/firestore-compat",rm="firebase",im="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs="[DEFAULT]",sm={[Ys]:"fire-core",[Dp]:"fire-core-compat",[Op]:"fire-analytics",[Np]:"fire-analytics-compat",[xp]:"fire-app-check",[Mp]:"fire-app-check-compat",[Lp]:"fire-auth",[Fp]:"fire-auth-compat",[Up]:"fire-rtdb",[Bp]:"fire-data-connect",[qp]:"fire-rtdb-compat",[jp]:"fire-fn",[$p]:"fire-fn-compat",[zp]:"fire-iid",[Hp]:"fire-iid-compat",[Wp]:"fire-fcm",[Kp]:"fire-fcm-compat",[Gp]:"fire-perf",[Qp]:"fire-perf-compat",[Jp]:"fire-rc",[Xp]:"fire-rc-compat",[Yp]:"fire-gcs",[Zp]:"fire-gcs-compat",[em]:"fire-fst",[nm]:"fire-fst-compat",[tm]:"fire-vertex","fire-js":"fire-js",[rm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Map,om=new Map,eo=new Map;function Vc(n,e){try{n.container.addComponent(e)}catch(t){ht.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function In(n){const e=n.name;if(eo.has(e))return ht.debug(`There were multiple attempts to register component ${e}.`),!1;eo.set(e,n);for(const t of _r.values())Vc(t,n);for(const t of om.values())Vc(t,n);return!0}function Ro(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Ge(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},kt=new br("app","Firebase",am);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=im;function pl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Zs,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw kt.create("bad-app-name",{appName:String(i)});if(t||(t=cl()),!t)throw kt.create("no-options");const o=_r.get(i);if(o){if(tn(t,o.options)&&tn(r,o.config))return o;throw kt.create("duplicate-app",{appName:i})}const a=new pp(i);for(const h of eo.values())a.addComponent(h);const u=new cm(t,r,a);return _r.set(i,u),u}function So(n=Zs){const e=_r.get(n);if(!e&&n===Zs&&cl())return pl();if(!e)throw kt.create("no-app",{appName:n});return e}function um(){return Array.from(_r.values())}function Vt(n,e,t){var a;let r=(a=sm[n])!=null?a:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const u=[`Unable to register library "${r}" with version "${e}":`];i&&u.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ht.warn(u.join(" "));return}In(new nn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebase-heartbeat-database",hm=1,yr="firebase-heartbeat-store";let Us=null;function ml(){return Us||(Us=Cp(lm,hm,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(yr)}catch(t){console.warn(t)}}}}).catch(n=>{throw kt.create("idb-open",{originalErrorMessage:n.message})})),Us}async function dm(n){try{const t=(await ml()).transaction(yr),r=await t.objectStore(yr).get(gl(n));return await t.done,r}catch(e){if(e instanceof gt)ht.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ht.warn(t.message)}}}async function Dc(n,e){try{const r=(await ml()).transaction(yr,"readwrite");await r.objectStore(yr).put(e,gl(n)),await r.done}catch(t){if(t instanceof gt)ht.warn(t.message);else{const r=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ht.warn(r.message)}}}function gl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=1024,pm=30;class mm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _m(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Nc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats.length>pm){const a=ym(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ht.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Nc(),{heartbeatsToSend:r,unsentEntries:i}=gm(this._heartbeatsCache.heartbeats),o=_i(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(t){return ht.warn(t),""}}}function Nc(){return new Date().toISOString().substring(0,10)}function gm(n,e=fm){const t=[];let r=n.slice();for(const i of n){const o=t.find(a=>a.agent===i.agent);if(o){if(o.dates.push(i.date),Oc(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Oc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _m{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return np()?rp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dm(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dc(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const i=await this.read();return Dc(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Oc(n){return _i(JSON.stringify({version:2,heartbeats:n})).length}function ym(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n){In(new nn("platform-logger",e=>new kp(e),"PRIVATE")),In(new nn("heartbeat",e=>new mm(e),"PRIVATE")),Vt(Ys,kc,n),Vt(Ys,kc,"esm2020"),Vt("fire-js","")}Em("");var vm="firebase",Tm="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vt(vm,Tm,"app");function _l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Im=_l,yl=new br("auth","Firebase",_l());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new wo("@firebase/auth");function wm(n,...e){yi.logLevel<=X.WARN&&yi.warn(`Auth (${Dn}): ${n}`,...e)}function oi(n,...e){yi.logLevel<=X.ERROR&&yi.error(`Auth (${Dn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(n,...e){throw Co(n,...e)}function et(n,...e){return Co(n,...e)}function El(n,e,t){const r={...Im(),[e]:t};return new br("auth","Firebase",r).create(e,{appName:n.name})}function Dt(n){return El(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Co(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return yl.create(n,...e)}function q(n,e,...t){if(!n)throw Co(e,...t)}function ct(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oi(e),new Error(e)}function dt(n,e){n||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.href)||""}function Am(){return Mc()==="http:"||Mc()==="https:"}function Mc(){var n;return typeof self!="undefined"&&((n=self.location)==null?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Am()||Yf()||"connection"in navigator)?navigator.onLine:!0}function Sm(){if(typeof navigator=="undefined")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t){this.shortDelay=e,this.longDelay=t,dt(t>e,"Short delay should be less than long delay!"),this.isMobile=Qf()||Zf()}get(){return Rm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(n,e){dt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Pm=new kr(3e4,6e4);function an(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function qt(n,e,t,r,i={}){return Tl(n,i,async()=>{let o={},a={};r&&(e==="GET"?a=r:o={body:JSON.stringify(r)});const u=Pr({key:n.config.apiKey,...a}).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const d={method:e,headers:h,...o};return Xf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Vn(n.emulatorConfig.host)&&(d.credentials="include"),vl.fetch()(await Il(n,n.config.apiHost,t,u),d)})}async function Tl(n,e,t){n._canInitEmulator=!1;const r={...Cm,...e};try{const i=new Vm(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await o.json();if("needConfirmation"in a)throw ei(n,"account-exists-with-different-credential",a);if(o.ok&&!("errorMessage"in a))return a;{const u=o.ok?a.errorMessage:a.error.message,[h,d]=u.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw ei(n,"credential-already-in-use",a);if(h==="EMAIL_EXISTS")throw ei(n,"email-already-in-use",a);if(h==="USER_DISABLED")throw ei(n,"user-disabled",a);const m=r[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw El(n,m,d);Je(n,m)}}catch(i){if(i instanceof gt)throw i;Je(n,"network-request-failed",{message:String(i)})}}async function Fi(n,e,t,r,i={}){const o=await qt(n,e,t,r,i);return"mfaPendingCredential"in o&&Je(n,"multi-factor-auth-required",{_serverResponse:o}),o}async function Il(n,e,t,r){const i=`${e}${t}?${r}`,o=n,a=o.config.emulator?bo(n.config,i):`${n.config.apiScheme}://${i}`;return bm.includes(t)&&(await o._persistenceManagerAvailable,o._getPersistenceType()==="COOKIE")?o._getPersistence()._getFinalTarget(a).toString():a}function km(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Vm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),Pm.get())})}}function ei(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}function xc(n){return n!==void 0&&n.enterprise!==void 0}class Dm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return km(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Nm(n,e){return qt(n,"GET","/v2/recaptchaConfig",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Om(n,e){return qt(n,"POST","/v1/accounts:delete",e)}async function Ei(n,e){return qt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mm(n,e=!1){const t=Ce(n),r=await t.getIdToken(e),i=Po(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,a=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:hr(Bs(i.auth_time)),issuedAtTime:hr(Bs(i.iat)),expirationTime:hr(Bs(i.exp)),signInProvider:a||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Bs(n){return Number(n)*1e3}function Po(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=ol(t);return i?JSON.parse(i):(oi("Failed to decode base64 JWT payload"),null)}catch(i){return oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Lc(n){const e=Po(n);return q(e,"internal-error"),q(typeof e.exp!="undefined","internal-error"),q(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof gt&&xm(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!=null?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(n){var E;const e=n.auth,t=await n.getIdToken(),r=await Er(n,Ei(e,{idToken:t}));q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=(E=i.providerUserInfo)!=null&&E.length?wl(i.providerUserInfo):[],a=Um(n.providerData,o),u=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),d=u?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new no(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,m)}async function Fm(n){const e=Ce(n);await vi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Um(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function wl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bm(n,e){const t=await Tl(n,{},async()=>{const r=Pr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,a=await Il(n,i,"/v1/token",`key=${o}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const h={method:"POST",headers:u,body:r};return n.emulatorConfig&&Vn(n.emulatorConfig.host)&&(h.credentials="include"),vl.fetch()(a,h)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function qm(n,e){return qt(n,"POST","/v2/accounts:revokeToken",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken!="undefined","internal-error"),q(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):Lc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){q(e.length!==0,"internal-error");const t=Lc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Bm(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,a=new yn;return r&&(q(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),o&&(q(typeof o=="number","internal-error",{appName:e}),a.expirationTime=o),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new yn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(n,e){q(typeof n=="string"||typeof n=="undefined","internal-error",{appName:e})}class Qe{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Lm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new no(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Er(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Mm(this,e)}reload(){return Fm(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Qe({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await vi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await Er(this,Om(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var B,H,K,J,C,y,p,g;const r=(B=t.displayName)!=null?B:void 0,i=(H=t.email)!=null?H:void 0,o=(K=t.phoneNumber)!=null?K:void 0,a=(J=t.photoURL)!=null?J:void 0,u=(C=t.tenantId)!=null?C:void 0,h=(y=t._redirectEventId)!=null?y:void 0,d=(p=t.createdAt)!=null?p:void 0,m=(g=t.lastLoginAt)!=null?g:void 0,{uid:E,emailVerified:I,isAnonymous:S,providerData:V,stsTokenManager:O}=t;q(E&&O,e,"internal-error");const P=yn.fromJSON(this.name,O);q(typeof E=="string",e,"internal-error"),wt(r,e.name),wt(i,e.name),q(typeof I=="boolean",e,"internal-error"),q(typeof S=="boolean",e,"internal-error"),wt(o,e.name),wt(a,e.name),wt(u,e.name),wt(h,e.name),wt(d,e.name),wt(m,e.name);const F=new Qe({uid:E,auth:e,email:i,emailVerified:I,displayName:r,isAnonymous:S,photoURL:a,phoneNumber:o,tenantId:u,stsTokenManager:P,createdAt:d,lastLoginAt:m});return V&&Array.isArray(V)&&(F.providerData=V.map(T=>({...T}))),h&&(F._redirectEventId=h),F}static async _fromIdTokenResponse(e,t,r=!1){const i=new yn;i.updateFromServerResponse(t);const o=new Qe({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vi(o),o}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];q(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?wl(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),u=new yn;u.updateFromIdToken(r);const h=new Qe({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new no(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(h,d),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function ut(n){dt(n instanceof Function,"Expected a class definition");let e=Fc.get(n);return e?(dt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Al.type="NONE";const Uc=Al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,e,t){return`firebase:${n}:${e}:${t}`}class En{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=ai(this.userKey,i.apiKey,o),this.fullPersistenceKey=ai("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ei(this.auth,{idToken:e}).catch(()=>{});return t?Qe._fromGetAccountInfoResponse(this.auth,t,e):null}return Qe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new En(ut(Uc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let o=i[0]||ut(Uc);const a=ai(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const m=await d._get(a);if(m){let E;if(typeof m=="string"){const I=await Ei(e,{idToken:m}).catch(()=>{});if(!I)break;E=await Qe._fromGetAccountInfoResponse(e,I,m)}else E=Qe._fromJSON(e,m);d!==o&&(u=E),o=d;break}}catch{}const h=i.filter(d=>d._shouldAllowMigration);return!o._shouldAllowMigration||!h.length?new En(o,e,r):(o=h[0],u&&await o._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==o)try{await d._remove(a)}catch{}})),new En(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kl(e))return"Blackberry";if(Vl(e))return"Webos";if(Sl(e))return"Safari";if((e.includes("chrome/")||Cl(e))&&!e.includes("edge/"))return"Chrome";if(Pl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rl(n=Oe()){return/firefox\//i.test(n)}function Sl(n=Oe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cl(n=Oe()){return/crios\//i.test(n)}function bl(n=Oe()){return/iemobile/i.test(n)}function Pl(n=Oe()){return/android/i.test(n)}function kl(n=Oe()){return/blackberry/i.test(n)}function Vl(n=Oe()){return/webos/i.test(n)}function ko(n=Oe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function jm(n=Oe()){var e;return ko(n)&&!!((e=window.navigator)!=null&&e.standalone)}function $m(){return ep()&&document.documentMode===10}function Dl(n=Oe()){return ko(n)||Pl(n)||Vl(n)||kl(n)||/windows phone/i.test(n)||bl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(n,e=[]){let t;switch(n){case"Browser":t=Bc(Oe());break;case"Worker":t=`${Bc(Oe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Dn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((a,u)=>{try{const h=e(o);a(h)}catch(h){u(h)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hm(n,e={}){return qt(n,"GET","/v2/passwordPolicy",an(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=6;class Km{constructor(e){var r,i,o,a;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=t.minPasswordLength)!=null?r:Wm,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))!=null?o:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!=null?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,i,o,a,u,h;const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=(r=t.meetsMinPasswordLength)!=null?r:!0),t.isValid&&(t.isValid=(i=t.meetsMaxPasswordLength)!=null?i:!0),t.isValid&&(t.isValid=(o=t.containsLowercaseLetter)!=null?o:!0),t.isValid&&(t.isValid=(a=t.containsUppercaseLetter)!=null?a:!0),t.isValid&&(t.isValid=(u=t.containsNumericCharacter)!=null?u:!0),t.isValid&&(t.isValid=(h=t.containsNonAlphanumericCharacter)!=null?h:!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qc(this),this.idTokenSubscription=new qc(this),this.beforeStateQueue=new zm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(o=>this._resolvePersistenceManagerAvailable=o)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ut(t)),this._initializationPromise=this.queue(async()=>{var r,i,o;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)==null?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ei(this,{idToken:e}),r=await Qe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var o;if(Ge(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(o=this.redirectUser)==null?void 0:o._redirectEventId,u=r==null?void 0:r._redirectEventId,h=await this.tryRedirectSignIn(e);(!a||a===u)&&(h==null?void 0:h.user)&&(r=h.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(Dt(this));const t=e?Ce(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Hm(this),t=new Km(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await qm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ut(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[ut(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(t=this.currentUser)==null?void 0:t.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(u,this,"internal-error"),u.then(()=>{a||o(this.currentUser)}),typeof t=="function"){const h=e.addObserver(t,r,i);return()=>{a=!0,h()}}else{const h=e.addObserver(t);return()=>{a=!0,h()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(Ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&wm(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Nn(n){return Ce(n)}class qc{constructor(e){this.auth=e,this.observer=null,this.addObserver=cp(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qm(n){Ui=n}function Ol(n){return Ui.loadJS(n)}function Jm(){return Ui.recaptchaEnterpriseScript}function Xm(){return Ui.gapiScript}function Ym(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Zm{constructor(){this.enterprise=new eg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class eg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const tg="recaptcha-enterprise",Ml="NO_RECAPTCHA";class ng{constructor(e){this.type=tg,this.auth=Nn(e)}async verify(e="verify",t=!1){async function r(o){if(!t){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,u)=>{Nm(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new Dm(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}}).catch(h=>{u(h)})})}function i(o,a,u){const h=window.grecaptcha;xc(h)?h.enterprise.ready(()=>{h.enterprise.execute(o,{action:e}).then(d=>{a(d)}).catch(()=>{a(Ml)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Zm().execute("siteKey",{action:"verify"}):new Promise((o,a)=>{r(this.auth).then(u=>{if(!t&&xc(window.grecaptcha))i(u,o,a);else{if(typeof window=="undefined"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let h=Jm();h.length!==0&&(h+=u),Ol(h).then(()=>{i(u,o,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function nr(n,e,t,r=!1,i=!1){const o=new ng(n);let a;if(i)a=Ml;else try{a=await o.verify(t)}catch{a=await o.verify(t,!0)}const u={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const h=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:h,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const h=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function jc(n,e,t,r,i){var o,a;if(i==="EMAIL_PASSWORD_PROVIDER")if((o=n._getRecaptchaConfig())!=null&&o.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await nr(n,e,t,t==="getOobCode");return r(n,u)}else return r(n,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await nr(n,e,t,t==="getOobCode");return r(n,h)}else return Promise.reject(u)});else if(i==="PHONE_PROVIDER")if((a=n._getRecaptchaConfig())!=null&&a.isProviderEnabled("PHONE_PROVIDER")){const u=await nr(n,e,t);return r(n,u).catch(async h=>{var d;if(((d=n._getRecaptchaConfig())==null?void 0:d.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(h.code==="auth/missing-recaptcha-token"||h.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const m=await nr(n,e,t,!1,!0);return r(n,m)}return Promise.reject(h)})}else{const u=await nr(n,e,t,!1,!0);return r(n,u)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e){const t=Ro(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(tn(o,e!=null?e:{}))return i;Je(i,"already-initialized")}return t.initialize({options:e})}function ig(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(ut);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sg(n,e,t){const r=Nn(n);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),o=xl(e),{host:a,port:u}=og(e),h=u===null?"":`:${u}`,d={url:`${o}//${a}${h}/`},m=Object.freeze({host:a,port:u,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(tn(d,r.config.emulator)&&tn(m,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=m,r.settings.appVerificationDisabledForTesting=!0,Vn(a)?(ll(`${o}//${a}${h}`),hl("Auth",!0)):i||ag()}function xl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function og(n){const e=xl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:$c(r.substr(o.length+1))}}else{const[o,a]=r.split(":");return{host:o,port:$c(a)}}}function $c(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ag(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,t){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}async function cg(n,e){return qt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(n,e){return Fi(n,"POST","/v1/accounts:signInWithPassword",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lg(n,e){return Fi(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}async function hg(n,e){return Fi(n,"POST","/v1/accounts:signInWithEmailLink",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends Vo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new vr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new vr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jc(e,t,"signInWithPassword",ug,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return lg(e,{email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jc(e,r,"signUpPassword",cg,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return hg(e,{idToken:t,email:this._email,oobCode:this._password});default:Je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(n,e){return Fi(n,"POST","/v1/accounts:signInWithIdp",an(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="http://localhost";class rn extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...o}=t;if(!r||!i)return null;const a=new rn(r,i);return a.idToken=o.idToken||void 0,a.accessToken=o.accessToken||void 0,a.secret=o.secret,a.nonce=o.nonce,a.pendingToken=o.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return vn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,vn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vn(e,t)}buildRequest(){const e={requestUri:dg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Pr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pg(n){const e=ir(sr(n)).link,t=e?ir(sr(e)).deep_link_id:null,r=ir(sr(n)).deep_link_id;return(r?ir(sr(r)).link:null)||r||t||e||n}class Do{constructor(e){var a,u,h,d,m,E;const t=ir(sr(e)),r=(a=t.apiKey)!=null?a:null,i=(u=t.oobCode)!=null?u:null,o=fg((h=t.mode)!=null?h:null);q(r&&i&&o,"argument-error"),this.apiKey=r,this.operation=o,this.code=i,this.continueUrl=(d=t.continueUrl)!=null?d:null,this.languageCode=(m=t.lang)!=null?m:null,this.tenantId=(E=t.tenantId)!=null?E:null}static parseLink(e){const t=pg(e);try{return new Do(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,t){return vr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Do.parseLink(t);return q(r,"argument-error"),vr._fromEmailAndCode(e,r.code,r.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Ll{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends Vr{constructor(){super("facebook.com")}static credential(e){return rn._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return At.credentialFromTaggedObject(e)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return At.credential(e.oauthAccessToken)}catch{return null}}}At.FACEBOOK_SIGN_IN_METHOD="facebook.com";At.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends Vr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Rt.credential(t,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Vr{constructor(){super("github.com")}static credential(e){return rn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return St.credentialFromTaggedObject(e)}static credentialFromError(e){return St.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return St.credential(e.oauthAccessToken)}catch{return null}}}St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends Vr{constructor(){super("twitter.com")}static credential(e,t){return rn._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ct.credentialFromTaggedObject(e)}static credentialFromError(e){return Ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ct.credential(t,r)}catch{return null}}}Ct.TWITTER_SIGN_IN_METHOD="twitter.com";Ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await Qe._fromIdTokenResponse(e,r,i),a=zc(r);return new wn({user:o,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=zc(r);return new wn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function zc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends gt{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ti.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!=null?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Ti(e,t,r,i)}}function Fl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ti._fromErrorAndOperation(n,o,e,r):o})}async function mg(n,e,t=!1){const r=await Er(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(n,e,t=!1){const{auth:r}=n;if(Ge(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const o=await Er(n,Fl(r,i,e,n),t);q(o.idToken,r,"internal-error");const a=Po(o.idToken);q(a,r,"internal-error");const{sub:u}=a;return q(n.uid===u,r,"user-mismatch"),wn._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Je(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ul(n,e,t=!1){if(Ge(n.app))return Promise.reject(Dt(n));const r="signIn",i=await Fl(n,r,e),o=await wn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function _g(n,e){return Ul(Nn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yg(n){const e=Nn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Xv(n,e,t){return Ge(n.app)?Promise.reject(Dt(n)):_g(Ce(n),On.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yg(n),r})}function Eg(n,e,t,r){return Ce(n).onIdTokenChanged(e,t,r)}function vg(n,e,t){return Ce(n).beforeAuthStateChanged(e,t)}function Yv(n){return Ce(n).signOut()}const Ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tg=1e3,Ig=10;class ql extends Bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Dl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,h)=>{this.notifyListeners(a,h)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},o=this.storage.getItem(r);$m()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ig):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Tg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ql.type="LOCAL";const wg=ql;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jl.type="SESSION";const $l=jl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Bi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(t.origin,o)),h=await Ag(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:h})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,a;return new Promise((u,h)=>{const d=No("",20);i.port1.start();const m=setTimeout(()=>{h(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(E){const I=E;if(I.data.eventId===d)switch(I.data.status){case"ack":clearTimeout(m),o=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),u(I.data.response);break;default:clearTimeout(m),clearTimeout(o),h(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Sg(n){tt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(){return typeof tt().WorkerGlobalScope!="undefined"&&typeof tt().importScripts=="function"}async function Cg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function Pg(){return zl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="firebaseLocalStorageDb",kg=1,wi="firebaseLocalStorage",Wl="fbase_key";class Dr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function qi(n,e){return n.transaction([wi],e?"readwrite":"readonly").objectStore(wi)}function Vg(){const n=indexedDB.deleteDatabase(Hl);return new Dr(n).toPromise()}function ro(){const n=indexedDB.open(Hl,kg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(wi,{keyPath:Wl})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(wi)?e(r):(r.close(),await Vg(),e(await ro()))})})}async function Hc(n,e,t){const r=qi(n,!0).put({[Wl]:e,value:t});return new Dr(r).toPromise()}async function Dg(n,e){const t=qi(n,!1).get(e),r=await new Dr(t).toPromise();return r===void 0?null:r.value}function Wc(n,e){const t=qi(n,!0).delete(e);return new Dr(t).toPromise()}const Ng=800,Og=3;class Kl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Og)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bi._getInstance(Pg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await Cg(),!this.activeServiceWorker)return;this.sender=new Rg(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);!e||((t=e[0])==null?void 0:t.fulfilled)&&((r=e[0])==null?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await Hc(e,Ii,"1"),await Wc(e,Ii),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Dg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=qi(i,!1).getAll();return new Dr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ng)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kl.type="LOCAL";const Mg=Kl;new kr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(n,e){return e?ut(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Lg(n){return Ul(n.auth,new Oo(n),n.bypassAuthState)}function Fg(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),gg(t,new Oo(n),n.bypassAuthState)}async function Ug(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),mg(t,new Oo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:a,type:u}=e;if(a){this.reject(a);return}const h={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(h))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Lg;case"linkViaPopup":case"linkViaRedirect":return Ug;case"reauthViaPopup":case"reauthViaRedirect":return Fg;default:Je(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg=new kr(2e3,1e4);class _n extends Gl{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,_n.currentPopupAction&&_n.currentPopupAction.cancel(),_n.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=No();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_n.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bg.get())};e()}}_n.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg="pendingRedirect",ci=new Map;class jg extends Gl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ci.get(this.auth._key());if(!e){try{const r=await $g(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ci.set(this.auth._key(),e)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $g(n,e){const t=Wg(e),r=Hg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function zg(n,e){ci.set(n._key(),e)}function Hg(n){return ut(n._redirectPersistence)}function Wg(n){return ai(qg,n.config.apiKey,n.name)}async function Kg(n,e,t=!1){if(Ge(n.app))return Promise.reject(Dt(n));const r=Nn(n),i=xg(r,e),a=await new jg(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=10*60*1e3;class Qg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Ql(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Gg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kc(e))}saveEventToCache(e){this.cachedEventUids.add(Kc(e)),this.lastProcessedEventTime=Date.now()}}function Kc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ql({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ql(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(n,e={}){return qt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zg=/^https?/;async function e_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Xg(n);for(const t of e)try{if(t_(t))return}catch{}Je(n,"unauthorized-domain")}function t_(n){const e=to(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Zg.test(t))return!1;if(Yg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new kr(3e4,6e4);function Gc(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function r_(n){return new Promise((e,t)=>{var i,o,a;function r(){Gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gc(),t(et(n,"network-request-failed"))},timeout:n_.get()})}if((o=(i=tt().gapi)==null?void 0:i.iframes)!=null&&o.Iframe)e(gapi.iframes.getContext());else if((a=tt().gapi)!=null&&a.load)r();else{const u=Ym("iframefcb");return tt()[u]=()=>{gapi.load?r():t(et(n,"network-request-failed"))},Ol(`${Xm()}?onload=${u}`).catch(h=>t(h))}}).catch(e=>{throw ui=null,e})}let ui=null;function i_(n){return ui=ui||r_(n),ui}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=new kr(5e3,15e3),o_="__/auth/iframe",a_="emulator/auth/iframe",c_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},u_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l_(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?bo(e,a_):`https://${n.config.authDomain}/${o_}`,r={apiKey:e.apiKey,appName:n.name,v:Dn},i=u_.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Pr(r).slice(1)}`}async function h_(n){const e=await i_(n),t=tt().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:l_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c_,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),u=tt().setTimeout(()=>{o(a)},s_.get());function h(){tt().clearTimeout(u),i(r)}r.ping(h).then(h,()=>{o(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f_=500,p_=600,m_="_blank",g_="http://localhost";class Qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function __(n,e,t,r=f_,i=p_){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const h={...d_,width:r.toString(),height:i.toString(),top:o,left:a},d=Oe().toLowerCase();t&&(u=Cl(d)?m_:t),Rl(d)&&(e=e||g_,h.scrollbars="yes");const m=Object.entries(h).reduce((I,[S,V])=>`${I}${S}=${V},`,"");if(jm(d)&&u!=="_self")return y_(e||"",u),new Qc(null);const E=window.open(e||"",u,m);q(E,n,"popup-blocked");try{E.focus()}catch{}return new Qc(E)}function y_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_="__/auth/handler",v_="emulator/auth/handler",T_=encodeURIComponent("fac");async function Jc(n,e,t,r,i,o){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Dn,eventId:i};if(e instanceof Ll){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ap(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,E]of Object.entries(o||{}))a[m]=E}if(e instanceof Vr){const m=e.getScopes().filter(E=>E!=="");m.length>0&&(a.scopes=m.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const m of Object.keys(u))u[m]===void 0&&delete u[m];const h=await n._getAppCheckToken(),d=h?`#${T_}=${encodeURIComponent(h)}`:"";return`${I_(n)}?${Pr(u).slice(1)}${d}`}function I_({config:n}){return n.emulator?bo(n,v_):`https://${n.authDomain}/${E_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs="webStorageSupport";class w_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=Kg,this._overrideRedirectResult=zg}async _openPopup(e,t,r,i){var a;dt((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const o=await Jc(e,t,r,to(),i);return __(e,o,No())}async _openRedirect(e,t,r,i){await this._originValidation(e);const o=await Jc(e,t,r,to(),i);return Sg(o),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(dt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await h_(e),r=new Qg(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(qs,{type:qs},i=>{var a;const o=(a=i==null?void 0:i[0])==null?void 0:a[qs];o!==void 0&&t(!!o),Je(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dl()||Sl()||ko()}}const A_=w_;var Xc="@firebase/auth",Yc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function C_(n){In(new nn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;q(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const h={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nl(n)},d=new Gm(r,i,o,h);return ig(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),In(new nn("auth-internal",e=>{const t=Nn(e.getProvider("auth").getImmediate());return(r=>new R_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Vt(Xc,Yc,S_(n)),Vt(Xc,Yc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=5*60,P_=ul("authIdTokenMaxAge")||b_;let Zc=null;const k_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>P_)return;const i=t==null?void 0:t.token;Zc!==i&&(Zc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function V_(n=So()){const e=Ro(n,"auth");if(e.isInitialized())return e.getImmediate();const t=rg(n,{popupRedirectResolver:A_,persistence:[Mg,wg,$l]}),r=ul("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const a=k_(o.toString());vg(t,a,()=>a(t.currentUser)),Eg(t,u=>a(u))}}const i=al("auth");return i&&sg(t,`http://${i}`),t}function D_(){var n,e;return(e=(n=document.getElementsByTagName("head"))==null?void 0:n[0])!=null?e:document}Qm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=et("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",D_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});C_("Browser");var eu=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nt,Jl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(y,p){function g(){}g.prototype=p.prototype,y.F=p.prototype,y.prototype=new g,y.prototype.constructor=y,y.D=function(T,v,w){for(var _=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)_[Q-2]=arguments[Q];return p.prototype[v].apply(T,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(y,p,g){g||(g=0);const T=Array(16);if(typeof p=="string")for(var v=0;v<16;++v)T[v]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(v=0;v<16;++v)T[v]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=y.g[0],g=y.g[1],v=y.g[2];let w=y.g[3],_;_=p+(w^g&(v^w))+T[0]+3614090360&4294967295,p=g+(_<<7&4294967295|_>>>25),_=w+(v^p&(g^v))+T[1]+3905402710&4294967295,w=p+(_<<12&4294967295|_>>>20),_=v+(g^w&(p^g))+T[2]+606105819&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(p^v&(w^p))+T[3]+3250441966&4294967295,g=v+(_<<22&4294967295|_>>>10),_=p+(w^g&(v^w))+T[4]+4118548399&4294967295,p=g+(_<<7&4294967295|_>>>25),_=w+(v^p&(g^v))+T[5]+1200080426&4294967295,w=p+(_<<12&4294967295|_>>>20),_=v+(g^w&(p^g))+T[6]+2821735955&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(p^v&(w^p))+T[7]+4249261313&4294967295,g=v+(_<<22&4294967295|_>>>10),_=p+(w^g&(v^w))+T[8]+1770035416&4294967295,p=g+(_<<7&4294967295|_>>>25),_=w+(v^p&(g^v))+T[9]+2336552879&4294967295,w=p+(_<<12&4294967295|_>>>20),_=v+(g^w&(p^g))+T[10]+4294925233&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(p^v&(w^p))+T[11]+2304563134&4294967295,g=v+(_<<22&4294967295|_>>>10),_=p+(w^g&(v^w))+T[12]+1804603682&4294967295,p=g+(_<<7&4294967295|_>>>25),_=w+(v^p&(g^v))+T[13]+4254626195&4294967295,w=p+(_<<12&4294967295|_>>>20),_=v+(g^w&(p^g))+T[14]+2792965006&4294967295,v=w+(_<<17&4294967295|_>>>15),_=g+(p^v&(w^p))+T[15]+1236535329&4294967295,g=v+(_<<22&4294967295|_>>>10),_=p+(v^w&(g^v))+T[1]+4129170786&4294967295,p=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(p^g))+T[6]+3225465664&4294967295,w=p+(_<<9&4294967295|_>>>23),_=v+(p^g&(w^p))+T[11]+643717713&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^p&(v^w))+T[0]+3921069994&4294967295,g=v+(_<<20&4294967295|_>>>12),_=p+(v^w&(g^v))+T[5]+3593408605&4294967295,p=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(p^g))+T[10]+38016083&4294967295,w=p+(_<<9&4294967295|_>>>23),_=v+(p^g&(w^p))+T[15]+3634488961&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^p&(v^w))+T[4]+3889429448&4294967295,g=v+(_<<20&4294967295|_>>>12),_=p+(v^w&(g^v))+T[9]+568446438&4294967295,p=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(p^g))+T[14]+3275163606&4294967295,w=p+(_<<9&4294967295|_>>>23),_=v+(p^g&(w^p))+T[3]+4107603335&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^p&(v^w))+T[8]+1163531501&4294967295,g=v+(_<<20&4294967295|_>>>12),_=p+(v^w&(g^v))+T[13]+2850285829&4294967295,p=g+(_<<5&4294967295|_>>>27),_=w+(g^v&(p^g))+T[2]+4243563512&4294967295,w=p+(_<<9&4294967295|_>>>23),_=v+(p^g&(w^p))+T[7]+1735328473&4294967295,v=w+(_<<14&4294967295|_>>>18),_=g+(w^p&(v^w))+T[12]+2368359562&4294967295,g=v+(_<<20&4294967295|_>>>12),_=p+(g^v^w)+T[5]+4294588738&4294967295,p=g+(_<<4&4294967295|_>>>28),_=w+(p^g^v)+T[8]+2272392833&4294967295,w=p+(_<<11&4294967295|_>>>21),_=v+(w^p^g)+T[11]+1839030562&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^p)+T[14]+4259657740&4294967295,g=v+(_<<23&4294967295|_>>>9),_=p+(g^v^w)+T[1]+2763975236&4294967295,p=g+(_<<4&4294967295|_>>>28),_=w+(p^g^v)+T[4]+1272893353&4294967295,w=p+(_<<11&4294967295|_>>>21),_=v+(w^p^g)+T[7]+4139469664&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^p)+T[10]+3200236656&4294967295,g=v+(_<<23&4294967295|_>>>9),_=p+(g^v^w)+T[13]+681279174&4294967295,p=g+(_<<4&4294967295|_>>>28),_=w+(p^g^v)+T[0]+3936430074&4294967295,w=p+(_<<11&4294967295|_>>>21),_=v+(w^p^g)+T[3]+3572445317&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^p)+T[6]+76029189&4294967295,g=v+(_<<23&4294967295|_>>>9),_=p+(g^v^w)+T[9]+3654602809&4294967295,p=g+(_<<4&4294967295|_>>>28),_=w+(p^g^v)+T[12]+3873151461&4294967295,w=p+(_<<11&4294967295|_>>>21),_=v+(w^p^g)+T[15]+530742520&4294967295,v=w+(_<<16&4294967295|_>>>16),_=g+(v^w^p)+T[2]+3299628645&4294967295,g=v+(_<<23&4294967295|_>>>9),_=p+(v^(g|~w))+T[0]+4096336452&4294967295,p=g+(_<<6&4294967295|_>>>26),_=w+(g^(p|~v))+T[7]+1126891415&4294967295,w=p+(_<<10&4294967295|_>>>22),_=v+(p^(w|~g))+T[14]+2878612391&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~p))+T[5]+4237533241&4294967295,g=v+(_<<21&4294967295|_>>>11),_=p+(v^(g|~w))+T[12]+1700485571&4294967295,p=g+(_<<6&4294967295|_>>>26),_=w+(g^(p|~v))+T[3]+2399980690&4294967295,w=p+(_<<10&4294967295|_>>>22),_=v+(p^(w|~g))+T[10]+4293915773&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~p))+T[1]+2240044497&4294967295,g=v+(_<<21&4294967295|_>>>11),_=p+(v^(g|~w))+T[8]+1873313359&4294967295,p=g+(_<<6&4294967295|_>>>26),_=w+(g^(p|~v))+T[15]+4264355552&4294967295,w=p+(_<<10&4294967295|_>>>22),_=v+(p^(w|~g))+T[6]+2734768916&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~p))+T[13]+1309151649&4294967295,g=v+(_<<21&4294967295|_>>>11),_=p+(v^(g|~w))+T[4]+4149444226&4294967295,p=g+(_<<6&4294967295|_>>>26),_=w+(g^(p|~v))+T[11]+3174756917&4294967295,w=p+(_<<10&4294967295|_>>>22),_=v+(p^(w|~g))+T[2]+718787259&4294967295,v=w+(_<<15&4294967295|_>>>17),_=g+(w^(v|~p))+T[9]+3951481745&4294967295,y.g[0]=y.g[0]+p&4294967295,y.g[1]=y.g[1]+(v+(_<<21&4294967295|_>>>11))&4294967295,y.g[2]=y.g[2]+v&4294967295,y.g[3]=y.g[3]+w&4294967295}r.prototype.v=function(y,p){p===void 0&&(p=y.length);const g=p-this.blockSize,T=this.C;let v=this.h,w=0;for(;w<p;){if(v==0)for(;w<=g;)i(this,y,w),w+=this.blockSize;if(typeof y=="string"){for(;w<p;)if(T[v++]=y.charCodeAt(w++),v==this.blockSize){i(this,T),v=0;break}}else for(;w<p;)if(T[v++]=y[w++],v==this.blockSize){i(this,T),v=0;break}}this.h=v,this.o+=p},r.prototype.A=function(){var y=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);y[0]=128;for(var p=1;p<y.length-8;++p)y[p]=0;p=this.o*8;for(var g=y.length-8;g<y.length;++g)y[g]=p&255,p/=256;for(this.v(y),y=Array(16),p=0,g=0;g<4;++g)for(let T=0;T<32;T+=8)y[p++]=this.g[g]>>>T&255;return y};function o(y,p){var g=u;return Object.prototype.hasOwnProperty.call(g,y)?g[y]:g[y]=p(y)}function a(y,p){this.h=p;const g=[];let T=!0;for(let v=y.length-1;v>=0;v--){const w=y[v]|0;T&&w==p||(g[v]=w,T=!1)}this.g=g}var u={};function h(y){return-128<=y&&y<128?o(y,function(p){return new a([p|0],p<0?-1:0)}):new a([y|0],y<0?-1:0)}function d(y){if(isNaN(y)||!isFinite(y))return E;if(y<0)return P(d(-y));const p=[];let g=1;for(let T=0;y>=g;T++)p[T]=y/g|0,g*=4294967296;return new a(p,0)}function m(y,p){if(y.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(y.charAt(0)=="-")return P(m(y.substring(1),p));if(y.indexOf("-")>=0)throw Error('number format error: interior "-" character');const g=d(Math.pow(p,8));let T=E;for(let w=0;w<y.length;w+=8){var v=Math.min(8,y.length-w);const _=parseInt(y.substring(w,w+v),p);v<8?(v=d(Math.pow(p,v)),T=T.j(v).add(d(_))):(T=T.j(g),T=T.add(d(_)))}return T}var E=h(0),I=h(1),S=h(16777216);n=a.prototype,n.m=function(){if(O(this))return-P(this).m();let y=0,p=1;for(let g=0;g<this.g.length;g++){const T=this.i(g);y+=(T>=0?T:4294967296+T)*p,p*=4294967296}return y},n.toString=function(y){if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(V(this))return"0";if(O(this))return"-"+P(this).toString(y);const p=d(Math.pow(y,6));var g=this;let T="";for(;;){const v=K(g,p).g;g=F(g,v.j(p));let w=((g.g.length>0?g.g[0]:g.h)>>>0).toString(y);if(g=v,V(g))return w+T;for(;w.length<6;)w="0"+w;T=w+T}},n.i=function(y){return y<0?0:y<this.g.length?this.g[y]:this.h};function V(y){if(y.h!=0)return!1;for(let p=0;p<y.g.length;p++)if(y.g[p]!=0)return!1;return!0}function O(y){return y.h==-1}n.l=function(y){return y=F(this,y),O(y)?-1:V(y)?0:1};function P(y){const p=y.g.length,g=[];for(let T=0;T<p;T++)g[T]=~y.g[T];return new a(g,~y.h).add(I)}n.abs=function(){return O(this)?P(this):this},n.add=function(y){const p=Math.max(this.g.length,y.g.length),g=[];let T=0;for(let v=0;v<=p;v++){let w=T+(this.i(v)&65535)+(y.i(v)&65535),_=(w>>>16)+(this.i(v)>>>16)+(y.i(v)>>>16);T=_>>>16,w&=65535,_&=65535,g[v]=_<<16|w}return new a(g,g[g.length-1]&-2147483648?-1:0)};function F(y,p){return y.add(P(p))}n.j=function(y){if(V(this)||V(y))return E;if(O(this))return O(y)?P(this).j(P(y)):P(P(this).j(y));if(O(y))return P(this.j(P(y)));if(this.l(S)<0&&y.l(S)<0)return d(this.m()*y.m());const p=this.g.length+y.g.length,g=[];for(var T=0;T<2*p;T++)g[T]=0;for(T=0;T<this.g.length;T++)for(let v=0;v<y.g.length;v++){const w=this.i(T)>>>16,_=this.i(T)&65535,Q=y.i(v)>>>16,ce=y.i(v)&65535;g[2*T+2*v]+=_*ce,B(g,2*T+2*v),g[2*T+2*v+1]+=w*ce,B(g,2*T+2*v+1),g[2*T+2*v+1]+=_*Q,B(g,2*T+2*v+1),g[2*T+2*v+2]+=w*Q,B(g,2*T+2*v+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new a(g,0)};function B(y,p){for(;(y[p]&65535)!=y[p];)y[p+1]+=y[p]>>>16,y[p]&=65535,p++}function H(y,p){this.g=y,this.h=p}function K(y,p){if(V(p))throw Error("division by zero");if(V(y))return new H(E,E);if(O(y))return p=K(P(y),p),new H(P(p.g),P(p.h));if(O(p))return p=K(y,P(p)),new H(P(p.g),p.h);if(y.g.length>30){if(O(y)||O(p))throw Error("slowDivide_ only works with positive integers.");for(var g=I,T=p;T.l(y)<=0;)g=J(g),T=J(T);var v=C(g,1),w=C(T,1);for(T=C(T,2),g=C(g,2);!V(T);){var _=w.add(T);_.l(y)<=0&&(v=v.add(g),w=_),T=C(T,1),g=C(g,1)}return p=F(y,v.j(p)),new H(v,p)}for(v=E;y.l(p)>=0;){for(g=Math.max(1,Math.floor(y.m()/p.m())),T=Math.ceil(Math.log(g)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),w=d(g),_=w.j(p);O(_)||_.l(y)>0;)g-=T,w=d(g),_=w.j(p);V(w)&&(w=I),v=v.add(w),y=F(y,_)}return new H(v,y)}n.B=function(y){return K(this,y).h},n.and=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)&y.i(T);return new a(g,this.h&y.h)},n.or=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)|y.i(T);return new a(g,this.h|y.h)},n.xor=function(y){const p=Math.max(this.g.length,y.g.length),g=[];for(let T=0;T<p;T++)g[T]=this.i(T)^y.i(T);return new a(g,this.h^y.h)};function J(y){const p=y.g.length+1,g=[];for(let T=0;T<p;T++)g[T]=y.i(T)<<1|y.i(T-1)>>>31;return new a(g,y.h)}function C(y,p){const g=p>>5;p%=32;const T=y.g.length-g,v=[];for(let w=0;w<T;w++)v[w]=p>0?y.i(w+g)>>>p|y.i(w+g+1)<<32-p:y.i(w+g);return new a(v,y.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Jl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,Nt=a}).apply(typeof eu!="undefined"?eu:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ti=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xl,or,Yl,li,io,Zl,eh,th;(function(){var n,e=Object.defineProperty;function t(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof ti=="object"&&ti];for(var c=0;c<s.length;++c){var l=s[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=t(this);function i(s,c){if(c)e:{var l=r;s=s.split(".");for(var f=0;f<s.length-1;f++){var A=s[f];if(!(A in l))break e;l=l[A]}s=s[s.length-1],f=l[s],c=c(f),c!=f&&c!=null&&e(l,s,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(s){return s||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(s){return s||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(s){return s||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(s){var c=typeof s;return c=="object"&&s!=null||c=="function"}function h(s,c,l){return s.call.apply(s.bind,arguments)}function d(s,c,l){return d=h,d.apply(null,arguments)}function m(s,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),s.apply(this,f)}}function E(s,c){function l(){}l.prototype=c.prototype,s.Z=c.prototype,s.prototype=new l,s.prototype.constructor=s,s.Ob=function(f,A,R){for(var N=Array(arguments.length-2),G=2;G<arguments.length;G++)N[G-2]=arguments[G];return c.prototype[A].apply(f,N)}}var I=typeof AsyncContext!="undefined"&&typeof AsyncContext.Snapshot=="function"?s=>s&&AsyncContext.Snapshot.wrap(s):s=>s;function S(s){const c=s.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=s[f];return l}return[]}function V(s,c){for(let f=1;f<arguments.length;f++){const A=arguments[f];var l=typeof A;if(l=l!="object"?l:A?Array.isArray(A)?"array":l:"null",l=="array"||l=="object"&&typeof A.length=="number"){l=s.length||0;const R=A.length||0;s.length=l+R;for(let N=0;N<R;N++)s[l+N]=A[N]}else s.push(A)}}class O{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function P(s){a.setTimeout(()=>{throw s},0)}function F(){var s=y;let c=null;return s.g&&(c=s.g,s.g=s.g.next,s.g||(s.h=null),c.next=null),c}class B{constructor(){this.h=this.g=null}add(c,l){const f=H.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var H=new O(()=>new K,s=>s.reset());class K{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let J,C=!1,y=new B,p=()=>{const s=Promise.resolve(void 0);J=()=>{s.then(g)}};function g(){for(var s;s=F();){try{s.h.call(s.g)}catch(l){P(l)}var c=H;c.j(s),c.h<100&&(c.h++,s.next=c.g,c.g=s)}C=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(s,c){this.type=s,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var s=!1,c=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return s}();function _(s){return/^[\s\xa0]*$/.test(s)}function Q(s,c){v.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s&&this.init(s,c)}E(Q,v),Q.prototype.init=function(s,c){const l=this.type=s.type,f=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;this.target=s.target||s.srcElement,this.g=c,c=s.relatedTarget,c||(l=="mouseover"?c=s.fromElement:l=="mouseout"&&(c=s.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=s.pointerType,this.state=s.state,this.i=s,s.defaultPrevented&&Q.Z.h.call(this)},Q.prototype.h=function(){Q.Z.h.call(this);const s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var ce="closure_listenable_"+(Math.random()*1e6|0),Pe=0;function D(s,c,l,f,A){this.listener=s,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=A,this.key=++Pe,this.da=this.fa=!1}function $(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function _e(s,c,l){for(const f in s)c.call(l,s[f],f,s)}function Me(s,c){for(const l in s)c.call(void 0,s[l],l,s)}function M(s){const c={};for(const l in s)c[l]=s[l];return c}const le="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function de(s,c){let l,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(l in f)s[l]=f[l];for(let R=0;R<le.length;R++)l=le[R],Object.prototype.hasOwnProperty.call(f,l)&&(s[l]=f[l])}}function Ke(s){this.src=s,this.g={},this.h=0}Ke.prototype.add=function(s,c,l,f,A){const R=s.toString();s=this.g[R],s||(s=this.g[R]=[],this.h++);const N=us(s,c,f,A);return N>-1?(c=s[N],l||(c.fa=!1)):(c=new D(c,this.src,R,!!f,A),c.fa=l,s.push(c)),c};function cs(s,c){const l=c.type;if(l in s.g){var f=s.g[l],A=Array.prototype.indexOf.call(f,c,void 0),R;(R=A>=0)&&Array.prototype.splice.call(f,A,1),R&&($(c),s.g[l].length==0&&(delete s.g[l],s.h--))}}function us(s,c,l,f){for(let A=0;A<s.length;++A){const R=s[A];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return A}return-1}var ls="closure_lm_"+(Math.random()*1e6|0),hs={};function _a(s,c,l,f,A){if(f&&f.once)return Ea(s,c,l,f,A);if(Array.isArray(c)){for(let R=0;R<c.length;R++)_a(s,c[R],l,f,A);return null}return l=ms(l),s&&s[ce]?s.J(c,l,u(f)?!!f.capture:!!f,A):ya(s,c,l,!1,f,A)}function ya(s,c,l,f,A,R){if(!c)throw Error("Invalid event type");const N=u(A)?!!A.capture:!!A;let G=fs(s);if(G||(s[ls]=G=new Ke(s)),l=G.add(c,l,f,N,R),l.proxy)return l;if(f=Sd(),l.proxy=f,f.src=s,f.listener=l,s.addEventListener)w||(A=N),A===void 0&&(A=!1),s.addEventListener(c.toString(),f,A);else if(s.attachEvent)s.attachEvent(Ta(c.toString()),f);else if(s.addListener&&s.removeListener)s.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Sd(){function s(l){return c.call(s.src,s.listener,l)}const c=Cd;return s}function Ea(s,c,l,f,A){if(Array.isArray(c)){for(let R=0;R<c.length;R++)Ea(s,c[R],l,f,A);return null}return l=ms(l),s&&s[ce]?s.K(c,l,u(f)?!!f.capture:!!f,A):ya(s,c,l,!0,f,A)}function va(s,c,l,f,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)va(s,c[R],l,f,A);else f=u(f)?!!f.capture:!!f,l=ms(l),s&&s[ce]?(s=s.i,R=String(c).toString(),R in s.g&&(c=s.g[R],l=us(c,l,f,A),l>-1&&($(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete s.g[R],s.h--)))):s&&(s=fs(s))&&(c=s.g[c.toString()],s=-1,c&&(s=us(c,l,f,A)),(l=s>-1?c[s]:null)&&ds(l))}function ds(s){if(typeof s!="number"&&s&&!s.da){var c=s.src;if(c&&c[ce])cs(c.i,s);else{var l=s.type,f=s.proxy;c.removeEventListener?c.removeEventListener(l,f,s.capture):c.detachEvent?c.detachEvent(Ta(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=fs(c))?(cs(l,s),l.h==0&&(l.src=null,c[ls]=null)):$(s)}}}function Ta(s){return s in hs?hs[s]:hs[s]="on"+s}function Cd(s,c){if(s.da)s=!0;else{c=new Q(c,this);const l=s.listener,f=s.ha||s.src;s.fa&&ds(s),s=l.call(f,c)}return s}function fs(s){return s=s[ls],s instanceof Ke?s:null}var ps="__closure_events_fn_"+(Math.random()*1e9>>>0);function ms(s){return typeof s=="function"?s:(s[ps]||(s[ps]=function(c){return s.handleEvent(c)}),s[ps])}function ke(){T.call(this),this.i=new Ke(this),this.M=this,this.G=null}E(ke,T),ke.prototype[ce]=!0,ke.prototype.removeEventListener=function(s,c,l,f){va(this,s,c,l,f)};function xe(s,c){var l,f=s.G;if(f)for(l=[];f;f=f.G)l.push(f);if(s=s.M,f=c.type||c,typeof c=="string")c=new v(c,s);else if(c instanceof v)c.target=c.target||s;else{var A=c;c=new v(f,s),de(c,A)}A=!0;let R,N;if(l)for(N=l.length-1;N>=0;N--)R=c.g=l[N],A=Ur(R,f,!0,c)&&A;if(R=c.g=s,A=Ur(R,f,!0,c)&&A,A=Ur(R,f,!1,c)&&A,l)for(N=0;N<l.length;N++)R=c.g=l[N],A=Ur(R,f,!1,c)&&A}ke.prototype.N=function(){if(ke.Z.N.call(this),this.i){var s=this.i;for(const c in s.g){const l=s.g[c];for(let f=0;f<l.length;f++)$(l[f]);delete s.g[c],s.h--}}this.G=null},ke.prototype.J=function(s,c,l,f){return this.i.add(String(s),c,!1,l,f)},ke.prototype.K=function(s,c,l,f){return this.i.add(String(s),c,!0,l,f)};function Ur(s,c,l,f){if(c=s.i.g[String(c)],!c)return!0;c=c.concat();let A=!0;for(let R=0;R<c.length;++R){const N=c[R];if(N&&!N.da&&N.capture==l){const G=N.listener,ye=N.ha||N.src;N.fa&&cs(s.i,N),A=G.call(ye,f)!==!1&&A}}return A&&!f.defaultPrevented}function bd(s,c){if(typeof s!="function")if(s&&typeof s.handleEvent=="function")s=d(s.handleEvent,s);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(s,c||0)}function Ia(s){s.g=bd(()=>{s.g=null,s.i&&(s.i=!1,Ia(s))},s.l);const c=s.h;s.h=null,s.m.apply(null,c)}class Pd extends T{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ia(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Un(s){T.call(this),this.h=s,this.g={}}E(Un,T);var wa=[];function Aa(s){_e(s.g,function(c,l){this.g.hasOwnProperty(l)&&ds(c)},s),s.g={}}Un.prototype.N=function(){Un.Z.N.call(this),Aa(this)},Un.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gs=a.JSON.stringify,kd=a.JSON.parse,Vd=class{stringify(s){return a.JSON.stringify(s,void 0)}parse(s){return a.JSON.parse(s,void 0)}};function Ra(){}function Sa(){}var Bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function _s(){v.call(this,"d")}E(_s,v);function ys(){v.call(this,"c")}E(ys,v);var zt={},Ca=null;function Br(){return Ca=Ca||new ke}zt.Ia="serverreachability";function ba(s){v.call(this,zt.Ia,s)}E(ba,v);function qn(s){const c=Br();xe(c,new ba(c))}zt.STAT_EVENT="statevent";function Pa(s,c){v.call(this,zt.STAT_EVENT,s),this.stat=c}E(Pa,v);function Le(s){const c=Br();xe(c,new Pa(c,s))}zt.Ja="timingevent";function ka(s,c){v.call(this,zt.Ja,s),this.size=c}E(ka,v);function jn(s,c){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){s()},c)}function $n(){this.g=!0}$n.prototype.ua=function(){this.g=!1};function Dd(s,c,l,f,A,R){s.info(function(){if(s.g)if(R){var N="",G=R.split("&");for(let ie=0;ie<G.length;ie++){var ye=G[ie].split("=");if(ye.length>1){const Ie=ye[0];ye=ye[1];const Ye=Ie.split("_");N=Ye.length>=2&&Ye[1]=="type"?N+(Ie+"="+ye+"&"):N+(Ie+"=redacted&")}}}else N=null;else N=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+l+`
`+N})}function Nd(s,c,l,f,A,R,N){s.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+l+`
`+R+" "+N})}function ln(s,c,l,f){s.info(function(){return"XMLHTTP TEXT ("+c+"): "+Md(s,l)+(f?" "+f:"")})}function Od(s,c){s.info(function(){return"TIMEOUT: "+c})}$n.prototype.info=function(){};function Md(s,c){if(!s.g)return c;if(!c)return null;try{const R=JSON.parse(c);if(R){for(s=0;s<R.length;s++)if(Array.isArray(R[s])){var l=R[s];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var A=f[0];if(A!="noop"&&A!="stop"&&A!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return gs(R)}catch{return c}}var qr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Va={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Da;function Es(){}E(Es,Ra),Es.prototype.g=function(){return new XMLHttpRequest},Da=new Es;function zn(s){return encodeURIComponent(String(s))}function xd(s){var c=1;s=s.split(":");const l=[];for(;c>0&&s.length;)l.push(s.shift()),c--;return s.length&&l.push(s.join(":")),l}function _t(s,c,l,f){this.j=s,this.i=c,this.l=l,this.S=f||1,this.V=new Un(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Na}function Na(){this.i=null,this.g="",this.h=!1}var Oa={},vs={};function Ts(s,c,l){s.M=1,s.A=$r(Xe(c)),s.u=l,s.R=!0,Ma(s,null)}function Ma(s,c){s.F=Date.now(),jr(s),s.B=Xe(s.A);var l=s.B,f=s.S;Array.isArray(f)||(f=[String(f)]),Ga(l.i,"t",f),s.C=0,l=s.j.L,s.h=new Na,s.g=dc(s.j,l?c:null,!s.u),s.P>0&&(s.O=new Pd(d(s.Y,s,s.g),s.P)),c=s.V,l=s.g,f=s.ba;var A="readystatechange";Array.isArray(A)||(A&&(wa[0]=A.toString()),A=wa);for(let R=0;R<A.length;R++){const N=_a(l,A[R],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=s.J?M(s.J):{},s.u?(s.v||(s.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.B,s.v,s.u,c)):(s.v="GET",s.g.ea(s.B,s.v,null,c)),qn(),Dd(s.i,s.v,s.B,s.l,s.S,s.u)}_t.prototype.ba=function(s){s=s.target;const c=this.O;c&&vt(s)==3?c.j():this.Y(s)},_t.prototype.Y=function(s){try{if(s==this.g)e:{const G=vt(this.g),ye=this.g.ya(),ie=this.g.ca();if(!(G<3)&&(G!=3||this.g&&(this.h.h||this.g.la()||tc(this.g)))){this.K||G!=4||ye==7||(ye==8||ie<=0?qn(3):qn(2)),Is(this);var c=this.g.ca();this.X=c;var l=Ld(this);if(this.o=c==200,Nd(this.i,this.v,this.B,this.l,this.S,G,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,A=this.g;if((f=A.g?A.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(f)){var R=f;break t}}R=null}if(s=R)ln(this.i,this.l,s,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ws(this,s);else{this.o=!1,this.m=3,Le(12),Ht(this),Hn(this);break e}}if(this.R){s=!0;let Ie;for(;!this.K&&this.C<l.length;)if(Ie=Fd(this,l),Ie==vs){G==4&&(this.m=4,Le(14),s=!1),ln(this.i,this.l,null,"[Incomplete Response]");break}else if(Ie==Oa){this.m=4,Le(15),ln(this.i,this.l,l,"[Invalid Chunk]"),s=!1;break}else ln(this.i,this.l,Ie,null),ws(this,Ie);if(xa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),G!=4||l.length!=0||this.h.h||(this.m=1,Le(16),s=!1),this.o=this.o&&s,!s)ln(this.i,this.l,l,"[Invalid Chunked Response]"),Ht(this),Hn(this);else if(l.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Vs(N),N.P=!0,Le(11))}}else ln(this.i,this.l,l,null),ws(this,l);G==4&&Ht(this),this.o&&!this.K&&(G==4?cc(this.j,this):(this.o=!1,jr(this)))}else Yd(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Le(12)):(this.m=0,Le(13)),Ht(this),Hn(this)}}}catch{}finally{}};function Ld(s){if(!xa(s))return s.g.la();const c=tc(s.g);if(c==="")return"";let l="";const f=c.length,A=vt(s.g)==4;if(!s.h.i){if(typeof TextDecoder=="undefined")return Ht(s),Hn(s),"";s.h.i=new a.TextDecoder}for(let R=0;R<f;R++)s.h.h=!0,l+=s.h.i.decode(c[R],{stream:!(A&&R==f-1)});return c.length=0,s.h.g+=l,s.C=0,s.h.g}function xa(s){return s.g?s.v=="GET"&&s.M!=2&&s.j.Aa:!1}function Fd(s,c){var l=s.C,f=c.indexOf(`
`,l);return f==-1?vs:(l=Number(c.substring(l,f)),isNaN(l)?Oa:(f+=1,f+l>c.length?vs:(c=c.slice(f,f+l),s.C=f+l,c)))}_t.prototype.cancel=function(){this.K=!0,Ht(this)};function jr(s){s.T=Date.now()+s.H,La(s,s.H)}function La(s,c){if(s.D!=null)throw Error("WatchDog timer not null");s.D=jn(d(s.aa,s),c)}function Is(s){s.D&&(a.clearTimeout(s.D),s.D=null)}_t.prototype.aa=function(){this.D=null;const s=Date.now();s-this.T>=0?(Od(this.i,this.B),this.M!=2&&(qn(),Le(17)),Ht(this),this.m=2,Hn(this)):La(this,this.T-s)};function Hn(s){s.j.I==0||s.K||cc(s.j,s)}function Ht(s){Is(s);var c=s.O;c&&typeof c.dispose=="function"&&c.dispose(),s.O=null,Aa(s.V),s.g&&(c=s.g,s.g=null,c.abort(),c.dispose())}function ws(s,c){try{var l=s.j;if(l.I!=0&&(l.g==s||As(l.h,s))){if(!s.L&&As(l.h,s)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<s.F)Gr(l),Wr(l);else break e;ks(l),Le(18)}}else l.xa=A[1],0<l.xa-l.K&&A[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=jn(d(l.Va,l),6e3));Ba(l.h)<=1&&l.ta&&(l.ta=void 0)}else Kt(l,11)}else if((s.L||l.g==s)&&Gr(l),!_(c))for(A=l.Ba.g.parse(c),c=0;c<A.length;c++){let ie=A[c];const Ie=ie[0];if(!(Ie<=l.K))if(l.K=Ie,ie=ie[1],l.I==2)if(ie[0]=="c"){l.M=ie[1],l.ba=ie[2];const Ye=ie[3];Ye!=null&&(l.ka=Ye,l.j.info("VER="+l.ka));const Gt=ie[4];Gt!=null&&(l.za=Gt,l.j.info("SVER="+l.za));const Tt=ie[5];Tt!=null&&typeof Tt=="number"&&Tt>0&&(f=1.5*Tt,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const It=s.g;if(It){const Jr=It.g?It.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Jr){var R=f.h;R.g||Jr.indexOf("spdy")==-1&&Jr.indexOf("quic")==-1&&Jr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Rs(R,R.h),R.h=null))}if(f.G){const Ds=It.g?It.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(f.wa=Ds,se(f.J,f.G,Ds))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-s.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var N=s;if(f.na=hc(f,f.L?f.ba:null,f.W),N.L){qa(f.h,N);var G=N,ye=f.O;ye&&(G.H=ye),G.D&&(Is(G),jr(G)),f.g=N}else oc(f);l.i.length>0&&Kr(l)}else ie[0]!="stop"&&ie[0]!="close"||Kt(l,7);else l.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Kt(l,7):Ps(l):ie[0]!="noop"&&l.l&&l.l.qa(ie),l.A=0)}}qn(4)}catch{}}var Ud=class{constructor(s,c){this.g=s,this.map=c}};function Fa(s){this.l=s||10,a.PerformanceNavigationTiming?(s=a.performance.getEntriesByType("navigation"),s=s.length>0&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ua(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ba(s){return s.h?1:s.g?s.g.size:0}function As(s,c){return s.h?s.h==c:s.g?s.g.has(c):!1}function Rs(s,c){s.g?s.g.add(c):s.h=c}function qa(s,c){s.h&&s.h==c?s.h=null:s.g&&s.g.has(c)&&s.g.delete(c)}Fa.prototype.cancel=function(){if(this.i=ja(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function ja(s){if(s.h!=null)return s.i.concat(s.h.G);if(s.g!=null&&s.g.size!==0){let c=s.i;for(const l of s.g.values())c=c.concat(l.G);return c}return S(s.i)}var $a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bd(s,c){if(s){s=s.split("&");for(let l=0;l<s.length;l++){const f=s[l].indexOf("=");let A,R=null;f>=0?(A=s[l].substring(0,f),R=s[l].substring(f+1)):A=s[l],c(A,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function yt(s){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;s instanceof yt?(this.l=s.l,Wn(this,s.j),this.o=s.o,this.g=s.g,Kn(this,s.u),this.h=s.h,Ss(this,Qa(s.i)),this.m=s.m):s&&(c=String(s).match($a))?(this.l=!1,Wn(this,c[1]||"",!0),this.o=Gn(c[2]||""),this.g=Gn(c[3]||"",!0),Kn(this,c[4]),this.h=Gn(c[5]||"",!0),Ss(this,c[6]||"",!0),this.m=Gn(c[7]||"")):(this.l=!1,this.i=new Jn(null,this.l))}yt.prototype.toString=function(){const s=[];var c=this.j;c&&s.push(Qn(c,za,!0),":");var l=this.g;return(l||c=="file")&&(s.push("//"),(c=this.o)&&s.push(Qn(c,za,!0),"@"),s.push(zn(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&s.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(Qn(l,l.charAt(0)=="/"?$d:jd,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",Qn(l,Hd)),s.join("")},yt.prototype.resolve=function(s){const c=Xe(this);let l=!!s.j;l?Wn(c,s.j):l=!!s.o,l?c.o=s.o:l=!!s.g,l?c.g=s.g:l=s.u!=null;var f=s.h;if(l)Kn(c,s.u);else if(l=!!s.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var A=c.h.lastIndexOf("/");A!=-1&&(f=c.h.slice(0,A+1)+f)}if(A=f,A==".."||A==".")f="";else if(A.indexOf("./")!=-1||A.indexOf("/.")!=-1){f=A.lastIndexOf("/",0)==0,A=A.split("/");const R=[];for(let N=0;N<A.length;){const G=A[N++];G=="."?f&&N==A.length&&R.push(""):G==".."?((R.length>1||R.length==1&&R[0]!="")&&R.pop(),f&&N==A.length&&R.push("")):(R.push(G),f=!0)}f=R.join("/")}else f=A}return l?c.h=f:l=s.i.toString()!=="",l?Ss(c,Qa(s.i)):l=!!s.m,l&&(c.m=s.m),c};function Xe(s){return new yt(s)}function Wn(s,c,l){s.j=l?Gn(c,!0):c,s.j&&(s.j=s.j.replace(/:$/,""))}function Kn(s,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);s.u=c}else s.u=null}function Ss(s,c,l){c instanceof Jn?(s.i=c,Wd(s.i,s.l)):(l||(c=Qn(c,zd)),s.i=new Jn(c,s.l))}function se(s,c,l){s.i.set(c,l)}function $r(s){return se(s,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),s}function Gn(s,c){return s?c?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function Qn(s,c,l){return typeof s=="string"?(s=encodeURI(s).replace(c,qd),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function qd(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var za=/[#\/\?@]/g,jd=/[#\?:]/g,$d=/[#\?]/g,zd=/[#\?@]/g,Hd=/#/g;function Jn(s,c){this.h=this.g=null,this.i=s||null,this.j=!!c}function Wt(s){s.g||(s.g=new Map,s.h=0,s.i&&Bd(s.i,function(c,l){s.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=Jn.prototype,n.add=function(s,c){Wt(this),this.i=null,s=hn(this,s);let l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(c),this.h+=1,this};function Ha(s,c){Wt(s),c=hn(s,c),s.g.has(c)&&(s.i=null,s.h-=s.g.get(c).length,s.g.delete(c))}function Wa(s,c){return Wt(s),c=hn(s,c),s.g.has(c)}n.forEach=function(s,c){Wt(this),this.g.forEach(function(l,f){l.forEach(function(A){s.call(c,A,f,this)},this)},this)};function Ka(s,c){Wt(s);let l=[];if(typeof c=="string")Wa(s,c)&&(l=l.concat(s.g.get(hn(s,c))));else for(s=Array.from(s.g.values()),c=0;c<s.length;c++)l=l.concat(s[c]);return l}n.set=function(s,c){return Wt(this),this.i=null,s=hn(this,s),Wa(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[c]),this.h+=1,this},n.get=function(s,c){return s?(s=Ka(this,s),s.length>0?String(s[0]):c):c};function Ga(s,c,l){Ha(s,c),l.length>0&&(s.i=null,s.g.set(hn(s,c),S(l)),s.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const A=zn(l);l=Ka(this,l);for(let R=0;R<l.length;R++){let N=A;l[R]!==""&&(N+="="+zn(l[R])),s.push(N)}}return this.i=s.join("&")};function Qa(s){const c=new Jn;return c.i=s.i,s.g&&(c.g=new Map(s.g),c.h=s.h),c}function hn(s,c){return c=String(c),s.j&&(c=c.toLowerCase()),c}function Wd(s,c){c&&!s.j&&(Wt(s),s.i=null,s.g.forEach(function(l,f){const A=f.toLowerCase();f!=A&&(Ha(this,f),Ga(this,A,l))},s)),s.j=c}function Kd(s,c){const l=new $n;if(a.Image){const f=new Image;f.onload=m(Et,l,"TestLoadImage: loaded",!0,c,f),f.onerror=m(Et,l,"TestLoadImage: error",!1,c,f),f.onabort=m(Et,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(Et,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=s}else c(!1)}function Gd(s,c){const l=new $n,f=new AbortController,A=setTimeout(()=>{f.abort(),Et(l,"TestPingServer: timeout",!1,c)},1e4);fetch(s,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?Et(l,"TestPingServer: ok",!0,c):Et(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),Et(l,"TestPingServer: error",!1,c)})}function Et(s,c,l,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(l)}catch{}}function Qd(){this.g=new Vd}function Cs(s){this.i=s.Sb||null,this.h=s.ab||!1}E(Cs,Ra),Cs.prototype.g=function(){return new zr(this.i,this.h)};function zr(s,c){ke.call(this),this.H=s,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}E(zr,ke),n=zr.prototype,n.open=function(s,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=s,this.D=c,this.readyState=1,Yn(this)},n.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};s&&(c.body=s),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Xn(this)),this.readyState=0},n.Pa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ja(this)}else s.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ja(s){s.j.read().then(s.Ma.bind(s)).catch(s.ga.bind(s))}n.Ma=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var c=s.value?s.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!s.done}))&&(this.response=this.responseText+=c)}s.done?Xn(this):Yn(this),this.readyState==3&&Ja(this)}},n.Oa=function(s){this.g&&(this.response=this.responseText=s,Xn(this))},n.Na=function(s){this.g&&(this.response=s,Xn(this))},n.ga=function(){this.g&&Xn(this)};function Xn(s){s.readyState=4,s.l=null,s.j=null,s.B=null,Yn(s)}n.setRequestHeader=function(s,c){this.A.append(s,c)},n.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=c.next();return s.join(`\r
`)};function Yn(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Xa(s){let c="";return _e(s,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function bs(s,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=Xa(l),typeof s=="string"?l!=null&&zn(l):se(s,c,l))}function he(s){ke.call(this),this.headers=new Map,this.L=s||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}E(he,ke);var Jd=/^https?$/i,Xd=["POST","PUT"];n=he.prototype,n.Fa=function(s){this.H=s},n.ea=function(s,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);c=c?c.toUpperCase():"GET",this.D=s,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Da.g(),this.g.onreadystatechange=I(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(s),!0),this.B=!1}catch(R){Ya(this,R);return}if(s=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)l.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),A=a.FormData&&s instanceof a.FormData,!(Array.prototype.indexOf.call(Xd,c,void 0)>=0)||f||A||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,N]of l)this.g.setRequestHeader(R,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(s),this.v=!1}catch(R){Ya(this,R)}};function Ya(s,c){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=c,s.o=5,Za(s),Hr(s)}function Za(s){s.A||(s.A=!0,xe(s,"complete"),xe(s,"error"))}n.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=s||7,xe(this,"complete"),xe(this,"abort"),Hr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Hr(this,!0)),he.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?ec(this):this.Xa())},n.Xa=function(){ec(this)};function ec(s){if(s.h&&typeof o!="undefined"){if(s.v&&vt(s)==4)setTimeout(s.Ca.bind(s),0);else if(xe(s,"readystatechange"),vt(s)==4){s.h=!1;try{const R=s.ca();e:switch(R){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=R===0){let N=String(s.D).match($a)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!Jd.test(N?N.toLowerCase():"")}l=f}if(l)xe(s,"complete"),xe(s,"success");else{s.o=6;try{var A=vt(s)>2?s.g.statusText:""}catch{A=""}s.l=A+" ["+s.ca()+"]",Za(s)}}finally{Hr(s)}}}}function Hr(s,c){if(s.g){s.m&&(clearTimeout(s.m),s.m=null);const l=s.g;s.g=null,c||xe(s,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function vt(s){return s.g?s.g.readyState:0}n.ca=function(){try{return vt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(s){if(this.g){var c=this.g.responseText;return s&&c.indexOf(s)==0&&(c=c.substring(s.length)),kd(c)}};function tc(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.F){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function Yd(s){const c={};s=(s.g&&vt(s)>=2&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<s.length;f++){if(_(s[f]))continue;var l=xd(s[f]);const A=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[A]||[];c[A]=R,R.push(l)}Me(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zn(s,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||c}function nc(s){this.za=0,this.i=[],this.j=new $n,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zn("failFast",!1,s),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zn("baseRetryDelayMs",5e3,s),this.Za=Zn("retryDelaySeedMs",1e4,s),this.Ta=Zn("forwardChannelMaxRetries",2,s),this.va=Zn("forwardChannelRequestTimeoutMs",2e4,s),this.ma=s&&s.xmlHttpFactory||void 0,this.Ua=s&&s.Rb||void 0,this.Aa=s&&s.useFetchStreams||!1,this.O=void 0,this.L=s&&s.supportsCrossDomainXhr||!1,this.M="",this.h=new Fa(s&&s.concurrentRequestLimit),this.Ba=new Qd,this.S=s&&s.fastHandshake||!1,this.R=s&&s.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=s&&s.Pb||!1,s&&s.ua&&this.j.ua(),s&&s.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&s&&s.detectBufferingProxy||!1,this.ia=void 0,s&&s.longPollingTimeout&&s.longPollingTimeout>0&&(this.ia=s.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=nc.prototype,n.ka=8,n.I=1,n.connect=function(s,c,l,f){Le(0),this.W=s,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=hc(this,null,this.W),Kr(this)};function Ps(s){if(rc(s),s.I==3){var c=s.V++,l=Xe(s.J);if(se(l,"SID",s.M),se(l,"RID",c),se(l,"TYPE","terminate"),er(s,l),c=new _t(s,s.j,c),c.M=2,c.A=$r(Xe(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=dc(c.j,null),c.g.ea(c.A)),c.F=Date.now(),jr(c)}lc(s)}function Wr(s){s.g&&(Vs(s),s.g.cancel(),s.g=null)}function rc(s){Wr(s),s.v&&(a.clearTimeout(s.v),s.v=null),Gr(s),s.h.cancel(),s.m&&(typeof s.m=="number"&&a.clearTimeout(s.m),s.m=null)}function Kr(s){if(!Ua(s.h)&&!s.m){s.m=!0;var c=s.Ea;J||p(),C||(J(),C=!0),y.add(c,s),s.D=0}}function Zd(s,c){return Ba(s.h)>=s.h.j-(s.m?1:0)?!1:s.m?(s.i=c.G.concat(s.i),!0):s.I==1||s.I==2||s.D>=(s.Sa?0:s.Ta)?!1:(s.m=jn(d(s.Ea,s,c),uc(s,s.D)),s.D++,!0)}n.Ea=function(s){if(this.m)if(this.m=null,this.I==1){if(!s){this.V=Math.floor(Math.random()*1e5),s=this.V++;const A=new _t(this,this.j,s);let R=this.o;if(this.U&&(R?(R=M(R),de(R,this.U)):R=this.U),this.u!==null||this.R||(A.J=R,R=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=sc(this,A,c),l=Xe(this.J),se(l,"RID",s),se(l,"CVER",22),this.G&&se(l,"X-HTTP-Session-Id",this.G),er(this,l),R&&(this.R?c="headers="+zn(Xa(R))+"&"+c:this.u&&bs(l,this.u,R)),Rs(this.h,A),this.Ra&&se(l,"TYPE","init"),this.S?(se(l,"$req",c),se(l,"SID","null"),A.U=!0,Ts(A,l,null)):Ts(A,l,c),this.I=2}}else this.I==3&&(s?ic(this,s):this.i.length==0||Ua(this.h)||ic(this))};function ic(s,c){var l;c?l=c.l:l=s.V++;const f=Xe(s.J);se(f,"SID",s.M),se(f,"RID",l),se(f,"AID",s.K),er(s,f),s.u&&s.o&&bs(f,s.u,s.o),l=new _t(s,s.j,l,s.D+1),s.u===null&&(l.J=s.o),c&&(s.i=c.G.concat(s.i)),c=sc(s,l,1e3),l.H=Math.round(s.va*.5)+Math.round(s.va*.5*Math.random()),Rs(s.h,l),Ts(l,f,c)}function er(s,c){s.H&&_e(s.H,function(l,f){se(c,f,l)}),s.l&&_e({},function(l,f){se(c,f,l)})}function sc(s,c,l){l=Math.min(s.i.length,l);const f=s.l?d(s.l.Ka,s.l,s):null;e:{var A=s.i;let G=-1;for(;;){const ye=["count="+l];G==-1?l>0?(G=A[0].g,ye.push("ofs="+G)):G=0:ye.push("ofs="+G);let ie=!0;for(let Ie=0;Ie<l;Ie++){var R=A[Ie].g;const Ye=A[Ie].map;if(R-=G,R<0)G=Math.max(0,A[Ie].g-100),ie=!1;else try{R="req"+R+"_"||"";try{var N=Ye instanceof Map?Ye:Object.entries(Ye);for(const[Gt,Tt]of N){let It=Tt;u(Tt)&&(It=gs(Tt)),ye.push(R+Gt+"="+encodeURIComponent(It))}}catch(Gt){throw ye.push(R+"type="+encodeURIComponent("_badmap")),Gt}}catch{f&&f(Ye)}}if(ie){N=ye.join("&");break e}}N=void 0}return s=s.i.splice(0,l),c.G=s,N}function oc(s){if(!s.g&&!s.v){s.Y=1;var c=s.Da;J||p(),C||(J(),C=!0),y.add(c,s),s.A=0}}function ks(s){return s.g||s.v||s.A>=3?!1:(s.Y++,s.v=jn(d(s.Da,s),uc(s,s.A)),s.A++,!0)}n.Da=function(){if(this.v=null,ac(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var s=4*this.T;this.j.info("BP detection timer enabled: "+s),this.B=jn(d(this.Wa,this),s)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Le(10),Wr(this),ac(this))};function Vs(s){s.B!=null&&(a.clearTimeout(s.B),s.B=null)}function ac(s){s.g=new _t(s,s.j,"rpc",s.Y),s.u===null&&(s.g.J=s.o),s.g.P=0;var c=Xe(s.na);se(c,"RID","rpc"),se(c,"SID",s.M),se(c,"AID",s.K),se(c,"CI",s.F?"0":"1"),!s.F&&s.ia&&se(c,"TO",s.ia),se(c,"TYPE","xmlhttp"),er(s,c),s.u&&s.o&&bs(c,s.u,s.o),s.O&&(s.g.H=s.O);var l=s.g;s=s.ba,l.M=1,l.A=$r(Xe(c)),l.u=null,l.R=!0,Ma(l,s)}n.Va=function(){this.C!=null&&(this.C=null,Wr(this),ks(this),Le(19))};function Gr(s){s.C!=null&&(a.clearTimeout(s.C),s.C=null)}function cc(s,c){var l=null;if(s.g==c){Gr(s),Vs(s),s.g=null;var f=2}else if(As(s.h,c))l=c.G,qa(s.h,c),f=1;else return;if(s.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var A=s.D;f=Br(),xe(f,new ka(f,l)),Kr(s)}else oc(s);else if(A=c.m,A==3||A==0&&c.X>0||!(f==1&&Zd(s,c)||f==2&&ks(s)))switch(l&&l.length>0&&(c=s.h,c.i=c.i.concat(l)),A){case 1:Kt(s,5);break;case 4:Kt(s,10);break;case 3:Kt(s,6);break;default:Kt(s,2)}}}function uc(s,c){let l=s.Qa+Math.floor(Math.random()*s.Za);return s.isActive()||(l*=2),l*c}function Kt(s,c){if(s.j.info("Error code "+c),c==2){var l=d(s.bb,s),f=s.Ua;const A=!f;f=new yt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Wn(f,"https"),$r(f),A?Kd(f.toString(),l):Gd(f.toString(),l)}else Le(2);s.I=0,s.l&&s.l.pa(c),lc(s),rc(s)}n.bb=function(s){s?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function lc(s){if(s.I=0,s.ja=[],s.l){const c=ja(s.h);(c.length!=0||s.i.length!=0)&&(V(s.ja,c),V(s.ja,s.i),s.h.i.length=0,S(s.i),s.i.length=0),s.l.oa()}}function hc(s,c,l){var f=l instanceof yt?Xe(l):new yt(l);if(f.g!="")c&&(f.g=c+"."+f.g),Kn(f,f.u);else{var A=a.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;const R=new yt(null);f&&Wn(R,f),c&&(R.g=c),A&&Kn(R,A),l&&(R.h=l),f=R}return l=s.G,c=s.wa,l&&c&&se(f,l,c),se(f,"VER",s.ka),er(s,f),f}function dc(s,c,l){if(c&&!s.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=s.Aa&&!s.ma?new he(new Cs({ab:l})):new he(s.ma),c.Fa(s.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function fc(){}n=fc.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Qr(){}Qr.prototype.g=function(s,c){return new $e(s,c)};function $e(s,c){ke.call(this),this.g=new nc(c),this.l=s,this.h=c&&c.messageUrlParams||null,s=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(s?s["X-WebChannel-Content-Type"]=c.messageContentType:s={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(s?s["X-WebChannel-Client-Profile"]=c.sa:s={"X-WebChannel-Client-Profile":c.sa}),this.g.U=s,(s=c&&c.Qb)&&!_(s)&&(this.g.u=s),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!_(c)&&(this.g.G=c,s=this.h,s!==null&&c in s&&(s=this.h,c in s&&delete s[c])),this.j=new dn(this)}E($e,ke),$e.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},$e.prototype.close=function(){Ps(this.g)},$e.prototype.o=function(s){var c=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.v&&(l={},l.__data__=gs(s),s=l);c.i.push(new Ud(c.Ya++,s)),c.I==3&&Kr(c)},$e.prototype.N=function(){this.g.l=null,delete this.j,Ps(this.g),delete this.g,$e.Z.N.call(this)};function pc(s){_s.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var c=s.__sm__;if(c){e:{for(const l in c){s=l;break e}s=void 0}(this.i=s)&&(s=this.i,c=c!==null&&s in c?c[s]:void 0),this.data=c}else this.data=s}E(pc,_s);function mc(){ys.call(this),this.status=1}E(mc,ys);function dn(s){this.g=s}E(dn,fc),dn.prototype.ra=function(){xe(this.g,"a")},dn.prototype.qa=function(s){xe(this.g,new pc(s))},dn.prototype.pa=function(s){xe(this.g,new mc)},dn.prototype.oa=function(){xe(this.g,"b")},Qr.prototype.createWebChannel=Qr.prototype.g,$e.prototype.send=$e.prototype.o,$e.prototype.open=$e.prototype.m,$e.prototype.close=$e.prototype.close,th=function(){return new Qr},eh=function(){return Br()},Zl=zt,io={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},qr.NO_ERROR=0,qr.TIMEOUT=8,qr.HTTP_ERROR=6,li=qr,Va.COMPLETE="complete",Yl=Va,Sa.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",ke.prototype.listen=ke.prototype.J,or=Sa,he.prototype.listenOnce=he.prototype.K,he.prototype.getLastError=he.prototype.Ha,he.prototype.getLastErrorCode=he.prototype.ya,he.prototype.getStatus=he.prototype.ca,he.prototype.getResponseJson=he.prototype.La,he.prototype.getResponseText=he.prototype.la,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Fa,Xl=he}).apply(typeof ti!="undefined"?ti:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const tu="@firebase/firestore",nu="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mn="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new wo("@firebase/firestore");function fn(){return sn.logLevel}function x(n,...e){if(sn.logLevel<=X.DEBUG){const t=e.map(Mo);sn.debug(`Firestore (${Mn}): ${n}`,...t)}}function ft(n,...e){if(sn.logLevel<=X.ERROR){const t=e.map(Mo);sn.error(`Firestore (${Mn}): ${n}`,...t)}}function An(n,...e){if(sn.logLevel<=X.WARN){const t=e.map(Mo);sn.warn(`Firestore (${Mn}): ${n}`,...t)}}function Mo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,nh(n,r,t)}function nh(n,e,t){let r=`FIRESTORE (${Mn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ft(r),new Error(r)}function te(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||nh(e,i,r)}function W(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class N_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class O_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class M_{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){te(this.o===void 0,42304);let r=this.i;const i=h=>this.i!==r?(r=this.i,t(h)):Promise.resolve();let o=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new lt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const h=o;e.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},u=h=>{x("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(x("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new lt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(x("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string",31837,{l:r}),new rh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string",2055,{h:e}),new De(e)}}class x_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class L_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new x_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ru{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class F_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ge(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){te(this.o===void 0,3512);const r=o=>{o.error!=null&&x("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,x("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{x("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):x("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ru(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ru(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U_(n){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=U_(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<t&&(r+=e.charAt(i[o]%62))}return r}}function Y(n,e){return n<e?-1:n>e?1:0}function so(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),o=e.charAt(r);if(i!==o)return js(i)===js(o)?Y(i,o):js(i)?1:-1}return Y(n.length,e.length)}const B_=55296,q_=57343;function js(n){const e=n.charCodeAt(0);return e>=B_&&e<=q_}function Rn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="__name__";class Ze{constructor(e,t,r){t===void 0?t=0:t>e.length&&j(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&j(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Ze.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ze?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const o=Ze.compareSegments(e.get(i),t.get(i));if(o!==0)return o}return Y(e.length,t.length)}static compareSegments(e,t){const r=Ze.isNumericId(e),i=Ze.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Ze.extractNumericId(e).compare(Ze.extractNumericId(t)):so(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nt.fromString(e.substring(4,e.length-2))}}class oe extends Ze{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new L(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const j_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends Ze{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return j_.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===iu}static keyField(){return new Se([iu])}static fromServerFormat(e){const t=[];let r="",i=0;const o=()=>{if(r.length===0)throw new L(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new L(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new L(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=h,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(o(),i++)}if(o(),a)throw new L(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(oe.fromString(e))}static fromName(e){return new U(oe.fromString(e).popFirst(5))}static empty(){return new U(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(n,e,t){if(!t)throw new L(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function $_(n,e,t,r){if(e===!0&&r===!0)throw new L(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function su(n){if(!U.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ou(n){if(U.isDocumentKey(n))throw new L(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function sh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":j(12329,{type:typeof n})}function je(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new L(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lo(n);throw new L(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(n,e){const t={typeString:n};return e&&(t.value=e),t}function Nr(n,e){if(!sh(n))throw new L(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,o="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(i&&typeof a!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${r}' field to equal '${o.value}'`;break}}if(t)throw new L(k.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const au=-62135596800,cu=1e6;class ae{static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*cu);return new ae(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new L(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<au)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/cu}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Nr(e,ae._jsonSchema))return new ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-au;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ae._jsonSchemaVersion="firestore/timestamp/1.0",ae._jsonSchema={type:ge("string",ae._jsonSchemaVersion),seconds:ge("number"),nanoseconds:ge("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new ae(0,0))}static max(){return new z(new ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=-1;function z_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=z.fromTimestamp(r===1e9?new ae(t+1,0):new ae(t,r));return new Mt(i,U.empty(),e)}function H_(n){return new Mt(n.readTime,n.key,Tr)}class Mt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Mt(z.min(),U.empty(),Tr)}static max(){return new Mt(z.max(),U.empty(),Tr)}}function W_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=U.comparator(n.documentKey,e.documentKey),t!==0?t:Y(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class G_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==K_)throw n;x("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&j(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(t,o).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof b?t:b.resolve(t)}catch(t){return b.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):b.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):b.reject(t)}static resolve(e){return new b((t,r)=>{t(e)})}static reject(e){return new b((t,r)=>{r(e)})}static waitFor(e){return new b((t,r)=>{let i=0,o=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++o,a&&o===i&&t()},h=>r(h))}),a=!0,o===i&&t()})}static or(e){let t=b.resolve(!1);for(const r of e)t=t.next(i=>i?b.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,o)=>{r.push(t.call(this,i,o))}),this.waitFor(r)}static mapArray(e,t){return new b((r,i)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>i(m))}})}static doWhile(e,t){return new b((r,i)=>{const o=()=>{e()===!0?t().next(()=>{o()},i):r()};o()})}}function Q_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ln(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ji.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=-1;function $i(n){return n==null}function Ai(n){return n===0&&1/n==-1/0}function J_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ai(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="";function X_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=uu(e)),e=Y_(n.get(t),e);return uu(e)}function Y_(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const o=n.charAt(i);switch(o){case"\0":t+="";break;case oh:t+="";break;default:t+=o}}return t}function uu(n){return n+oh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function ah(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ni(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ni(this.root,e,this.comparator,!1)}getReverseIterator(){return new ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ni(this.root,e,this.comparator,!0)}}class ni{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?r(e.key,t):1,t&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,i,o){this.key=e,this.value=t,this.color=r!=null?r:Re.RED,this.left=i!=null?i:Re.EMPTY,this.right=o!=null?o:Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,o){return new Re(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,i!=null?i:this.left,o!=null?o:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,t,r),null):o===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw j(43730,{key:this.key,value:this.value});if(this.right.isRed())throw j(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw j(27949);return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw j(57766)}get value(){throw j(16141)}get color(){throw j(16727)}get left(){throw j(29726)}get right(){throw j(36894)}copy(e,t,r,i,o){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new hu(this.data.getIterator())}getIteratorFrom(e){return new hu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class hu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new ze([])}unionWith(e){let t=new Te(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Rn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(o){throw typeof DOMException!="undefined"&&o instanceof DOMException?new ch("Invalid base64 string: "+o):o}}(e);return new be(t)}static fromUint8Array(e){const t=function(i){let o="";for(let a=0;a<i.length;++a)o+=String.fromCharCode(i[a]);return o}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const Z_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xt(n){if(te(!!n,39018),typeof n=="string"){let e=0;const t=Z_.exec(n);if(te(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:fe(n.seconds),nanos:fe(n.nanos)}}function fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?be.fromBase64String(n):be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="server_timestamp",lh="__type__",hh="__previous_value__",dh="__local_write_time__";function Uo(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[lh])==null?void 0:r.stringValue)===uh}function zi(n){const e=n.mapValue.fields[hh];return Uo(e)?zi(e):e}function Ir(n){const e=xt(n.mapValue.fields[dh].timestampValue);return new ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(e,t,r,i,o,a,u,h,d,m){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m}}const Ri="(default)";class wr{constructor(e,t){this.projectId=e,this.database=t||Ri}static empty(){return new wr("","")}get isDefaultDatabase(){return this.database===Ri}isEqual(e){return e instanceof wr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="__type__",ph="__max__",ri={mapValue:{fields:{__type__:{stringValue:ph}}}},mh="__vector__",Si="value";function Ft(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Uo(n)?4:ny(n)?9007199254740991:ty(n)?10:11:j(28295,{value:n})}function ot(n,e){if(n===e)return!0;const t=Ft(n);if(t!==Ft(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ir(n).isEqual(Ir(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=xt(i.timestampValue),u=xt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,o){return Lt(i.bytesValue).isEqual(Lt(o.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,o){return fe(i.geoPointValue.latitude)===fe(o.geoPointValue.latitude)&&fe(i.geoPointValue.longitude)===fe(o.geoPointValue.longitude)}(n,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return fe(i.integerValue)===fe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const a=fe(i.doubleValue),u=fe(o.doubleValue);return a===u?Ai(a)===Ai(u):isNaN(a)&&isNaN(u)}return!1}(n,e);case 9:return Rn(n.arrayValue.values||[],e.arrayValue.values||[],ot);case 10:case 11:return function(i,o){const a=i.mapValue.fields||{},u=o.mapValue.fields||{};if(lu(a)!==lu(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!ot(a[h],u[h])))return!1;return!0}(n,e);default:return j(52216,{left:n})}}function Ar(n,e){return(n.values||[]).find(t=>ot(t,e))!==void 0}function Sn(n,e){if(n===e)return 0;const t=Ft(n),r=Ft(e);if(t!==r)return Y(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Y(n.booleanValue,e.booleanValue);case 2:return function(o,a){const u=fe(o.integerValue||o.doubleValue),h=fe(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,e);case 3:return du(n.timestampValue,e.timestampValue);case 4:return du(Ir(n),Ir(e));case 5:return so(n.stringValue,e.stringValue);case 6:return function(o,a){const u=Lt(o),h=Lt(a);return u.compareTo(h)}(n.bytesValue,e.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=Y(u[d],h[d]);if(m!==0)return m}return Y(u.length,h.length)}(n.referenceValue,e.referenceValue);case 8:return function(o,a){const u=Y(fe(o.latitude),fe(a.latitude));return u!==0?u:Y(fe(o.longitude),fe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return fu(n.arrayValue,e.arrayValue);case 10:return function(o,a){var I,S,V,O;const u=o.fields||{},h=a.fields||{},d=(I=u[Si])==null?void 0:I.arrayValue,m=(S=h[Si])==null?void 0:S.arrayValue,E=Y(((V=d==null?void 0:d.values)==null?void 0:V.length)||0,((O=m==null?void 0:m.values)==null?void 0:O.length)||0);return E!==0?E:fu(d,m)}(n.mapValue,e.mapValue);case 11:return function(o,a){if(o===ri.mapValue&&a===ri.mapValue)return 0;if(o===ri.mapValue)return 1;if(a===ri.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let E=0;E<h.length&&E<m.length;++E){const I=so(h[E],m[E]);if(I!==0)return I;const S=Sn(u[h[E]],d[m[E]]);if(S!==0)return S}return Y(h.length,m.length)}(n.mapValue,e.mapValue);default:throw j(23264,{he:t})}}function du(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Y(n,e);const t=xt(n),r=xt(e),i=Y(t.seconds,r.seconds);return i!==0?i:Y(t.nanos,r.nanos)}function fu(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const o=Sn(t[i],r[i]);if(o)return o}return Y(t.length,r.length)}function Cn(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Lt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return U.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const o of t.values||[])i?i=!1:r+=",",r+=oo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${oo(t.fields[a])}`;return i+"}"}(n.mapValue):j(61005,{value:n})}function hi(n){switch(Ft(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zi(n);return e?16+hi(e):16;case 5:return 2*n.stringValue.length;case 6:return Lt(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,o)=>i+hi(o),0)}(n.arrayValue);case 10:case 11:return function(r){let i=0;return jt(r.fields,(o,a)=>{i+=o.length+hi(a)}),i}(n.mapValue);default:throw j(13486,{value:n})}}function ao(n){return!!n&&"integerValue"in n}function Bo(n){return!!n&&"arrayValue"in n}function pu(n){return!!n&&"nullValue"in n}function mu(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function di(n){return!!n&&"mapValue"in n}function ty(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[fh])==null?void 0:r.stringValue)===mh}function dr(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return jt(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=dr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=dr(n.arrayValue.values[t]);return e}return{...n}}function ny(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===ph}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!di(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=dr(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,r,i),r={},i=[],t=u.popLast()}a?r[u.lastSegment()]=dr(a):i.push(u.lastSegment())});const o=this.getFieldsMap(t);this.applyChanges(o,r,i)}delete(e){const t=this.field(e.popLast());di(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ot(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];di(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){jt(t,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new Be(dr(this.value))}}function gh(n){const e=[];return jt(n.fields,(t,r)=>{const i=new Se([t]);if(di(r)){const o=gh(r.mapValue).fields;if(o.length===0)e.push(i);else for(const a of o)e.push(i.child(a))}else e.push(i)}),new ze(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r,i,o,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ne(e,0,z.min(),z.min(),z.min(),Be.empty(),0)}static newFoundDocument(e,t,r,i){return new Ne(e,1,t,z.min(),r,i,0)}static newNoDocument(e,t){return new Ne(e,2,t,z.min(),z.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Ne(e,3,t,z.min(),z.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ne&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.position=e,this.inclusive=t}}function gu(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const o=e[i],a=n.position[i];if(o.field.isKeyField()?r=U.comparator(U.fromName(a.referenceValue),t.key):r=Sn(a,t.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function _u(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ot(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,t="asc"){this.field=e,this.dir=t}}function ry(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{}class ve extends _h{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new sy(e,t,r):t==="array-contains"?new cy(e,r):t==="in"?new uy(e,r):t==="not-in"?new ly(e,r):t==="array-contains-any"?new hy(e,r):new ve(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new oy(e,r):new ay(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Sn(t,this.value)):t!==null&&Ft(this.value)===Ft(t)&&this.matchesComparison(Sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return j(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class at extends _h{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new at(e,t)}matches(e){return yh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function yh(n){return n.op==="and"}function Eh(n){return iy(n)&&yh(n)}function iy(n){for(const e of n.filters)if(e instanceof at)return!1;return!0}function co(n){if(n instanceof ve)return n.field.canonicalString()+n.op.toString()+Cn(n.value);if(Eh(n))return n.filters.map(e=>co(e)).join(",");{const e=n.filters.map(t=>co(t)).join(",");return`${n.op}(${e})`}}function vh(n,e){return n instanceof ve?function(r,i){return i instanceof ve&&r.op===i.op&&r.field.isEqual(i.field)&&ot(r.value,i.value)}(n,e):n instanceof at?function(r,i){return i instanceof at&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,a,u)=>o&&vh(a,i.filters[u]),!0):!1}(n,e):void j(19439)}function Th(n){return n instanceof ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Cn(t.value)}`}(n):n instanceof at?function(t){return t.op.toString()+" {"+t.getFilters().map(Th).join(" ,")+"}"}(n):"Filter"}class sy extends ve{constructor(e,t,r){super(e,t,r),this.key=U.fromName(r.referenceValue)}matches(e){const t=U.comparator(e.key,this.key);return this.matchesComparison(t)}}class oy extends ve{constructor(e,t){super(e,"in",t),this.keys=Ih("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ay extends ve{constructor(e,t){super(e,"not-in",t),this.keys=Ih("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ih(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>U.fromName(r.referenceValue))}class cy extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bo(t)&&Ar(t.arrayValue,this.value)}}class uy extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Ar(this.value.arrayValue,t)}}class ly extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Ar(this.value.arrayValue,t)}}class hy extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Ar(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,t=null,r=[],i=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function yu(n,e=null,t=[],r=[],i=null,o=null,a=null){return new dy(n,e,t,r,i,o,a)}function qo(n){const e=W(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>co(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),$i(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Cn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Cn(r)).join(",")),e.Te=t}return e.Te}function jo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!ry(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!_u(n.startAt,e.startAt)&&_u(n.endAt,e.endAt)}function uo(n){return U.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t=null,r=[],i=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function fy(n,e,t,r,i,o,a,u){return new Hi(n,e,t,r,i,o,a,u)}function Wi(n){return new Hi(n)}function Eu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function py(n){return n.collectionGroup!==null}function fr(n){const e=W(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Te(Se.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new bi(o,r))}),t.has(Se.keyField().canonicalString())||e.Ie.push(new bi(Se.keyField(),r))}return e.Ie}function nt(n){const e=W(n);return e.Ee||(e.Ee=my(e,fr(n))),e.Ee}function my(n,e){if(n.limitType==="F")return yu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new bi(i.field,o)});const t=n.endAt?new Ci(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ci(n.startAt.position,n.startAt.inclusive):null;return yu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function lo(n,e,t){return new Hi(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ki(n,e){return jo(nt(n),nt(e))&&n.limitType===e.limitType}function wh(n){return`${qo(nt(n))}|lt:${n.limitType}`}function pn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>Th(i)).join(", ")}]`),$i(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Cn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Cn(i)).join(",")),`Target(${r})`}(nt(n))}; limitType=${n.limitType})`}function Gi(n,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):U.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,e)&&function(r,i){for(const o of fr(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,u,h){const d=gu(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,fr(r),i)||r.endAt&&!function(a,u,h){const d=gu(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,fr(r),i))}(n,e)}function gy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ah(n){return(e,t)=>{let r=!1;for(const i of fr(n)){const o=_y(i,e,t);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function _y(n,e,t){const r=n.field.isKeyField()?U.comparator(e.key,t.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Sn(h,d):j(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return j(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jt(this.inner,(t,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return ah(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new ue(U.comparator);function pt(){return yy}const Rh=new ue(U.comparator);function ar(...n){let e=Rh;for(const t of n)e=e.insert(t.key,t);return e}function Sh(n){let e=Rh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Yt(){return pr()}function Ch(){return pr()}function pr(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ey=new ue(U.comparator),vy=new Te(U.comparator);function Z(...n){let e=vy;for(const t of n)e=e.add(t);return e}const Ty=new Te(Y);function Iy(){return Ty}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ai(e)?"-0":e}}function bh(n){return{integerValue:""+n}}function wy(n,e){return J_(e)?bh(e):$o(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this._=void 0}}function Ay(n,e,t){return n instanceof Rr?function(i,o){const a={fields:{[lh]:{stringValue:uh},[dh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&Uo(o)&&(o=zi(o)),o&&(a.fields[hh]=o),{mapValue:a}}(t,e):n instanceof Sr?kh(n,e):n instanceof Cr?Vh(n,e):function(i,o){const a=Ph(i,o),u=vu(a)+vu(i.Ae);return ao(a)&&ao(i.Ae)?bh(u):$o(i.serializer,u)}(n,e)}function Ry(n,e,t){return n instanceof Sr?kh(n,e):n instanceof Cr?Vh(n,e):t}function Ph(n,e){return n instanceof Pi?function(r){return ao(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class Rr extends Qi{}class Sr extends Qi{constructor(e){super(),this.elements=e}}function kh(n,e){const t=Dh(e);for(const r of n.elements)t.some(i=>ot(i,r))||t.push(r);return{arrayValue:{values:t}}}class Cr extends Qi{constructor(e){super(),this.elements=e}}function Vh(n,e){let t=Dh(e);for(const r of n.elements)t=t.filter(i=>!ot(i,r));return{arrayValue:{values:t}}}class Pi extends Qi{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function vu(n){return fe(n.integerValue||n.doubleValue)}function Dh(n){return Bo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t){this.field=e,this.transform=t}}function Cy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Sr&&i instanceof Sr||r instanceof Cr&&i instanceof Cr?Rn(r.elements,i.elements,ot):r instanceof Pi&&i instanceof Pi?ot(r.Ae,i.Ae):r instanceof Rr&&i instanceof Rr}(n.transform,e.transform)}class by{constructor(e,t){this.version=e,this.transformResults=t}}class We{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new We}static exists(e){return new We(void 0,e)}static updateTime(e){return new We(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Ji{}function Nh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new zo(n.key,We.none()):new Or(n.key,n.data,We.none());{const t=n.data,r=Be.empty();let i=new Te(Se.comparator);for(let o of e.fields)if(!i.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?r.delete(o):r.set(o,a),i=i.add(o)}return new $t(n.key,r,new ze(i.toArray()),We.none())}}function Py(n,e,t){n instanceof Or?function(i,o,a){const u=i.value.clone(),h=Iu(i.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(i,o,a){if(!fi(i.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Iu(i.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Oh(i)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,e,t):function(i,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function mr(n,e,t,r){return n instanceof Or?function(o,a,u,h){if(!fi(o.precondition,a))return u;const d=o.value.clone(),m=wu(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(o,a,u,h){if(!fi(o.precondition,a))return u;const d=wu(o.fieldTransforms,h,a),m=a.data;return m.setAll(Oh(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(E=>E.field))}(n,e,t,r):function(o,a,u){return fi(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,e,t)}function ky(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),o=Ph(r.transform,i||null);o!=null&&(t===null&&(t=Be.empty()),t.set(r.field,o))}return t||null}function Tu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Rn(r,i,(o,a)=>Cy(o,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Or extends Ji{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends Ji{constructor(e,t,r,i,o=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Oh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Iu(n,e,t){const r=new Map;te(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const o=n[i],a=o.transform,u=e.data.field(o.field);r.set(o.field,Ry(a,u,t[i]))}return r}function wu(n,e,t){const r=new Map;for(const i of n){const o=i.transform,a=t.data.field(i.field);r.set(i.field,Ay(o,a,e))}return r}class zo extends Ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Vy extends Ji{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&Py(o,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=mr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ch();return this.mutations.forEach(i=>{const o=e.get(i.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(i.key)?null:u;const h=Nh(a,u);h!==null&&r.set(i.key,h),a.isValidDocument()||a.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Rn(this.mutations,e.mutations,(t,r)=>Tu(t,r))&&Rn(this.baseMutations,e.baseMutations,(t,r)=>Tu(t,r))}}class Ho{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){te(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return Ey}();const o=e.mutations;for(let a=0;a<o.length;a++)i=i.insert(o[a].key,r[a].version);return new Ho(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,ee;function My(n){switch(n){case k.OK:return j(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return j(15467,{code:n})}}function Mh(n){if(n===void 0)return ft("GRPC error has no .code"),k.UNKNOWN;switch(n){case me.OK:return k.OK;case me.CANCELLED:return k.CANCELLED;case me.UNKNOWN:return k.UNKNOWN;case me.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case me.INTERNAL:return k.INTERNAL;case me.UNAVAILABLE:return k.UNAVAILABLE;case me.UNAUTHENTICATED:return k.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case me.NOT_FOUND:return k.NOT_FOUND;case me.ALREADY_EXISTS:return k.ALREADY_EXISTS;case me.PERMISSION_DENIED:return k.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case me.ABORTED:return k.ABORTED;case me.OUT_OF_RANGE:return k.OUT_OF_RANGE;case me.UNIMPLEMENTED:return k.UNIMPLEMENTED;case me.DATA_LOSS:return k.DATA_LOSS;default:return j(39323,{code:n})}}(ee=me||(me={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $s=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly=new Nt([4294967295,4294967295],0);function Au(n){const e=xy().encode(n),t=new Jl;return t.update(e),new Uint8Array(t.digest())}function Ru(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new Nt([t,r],0),new Nt([i,o],0)]}class Wo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new cr(`Invalid padding: ${t}`);if(r<0)throw new cr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new cr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new cr(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Nt.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Nt.fromNumber(r)));return i.compare(Ly)===1&&(i=new Nt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Au(e),[r,i]=Ru(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);if(!this.we(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Wo(o,i,t);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.ge===0)return;const t=Au(e),[r,i]=Ru(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,i,o);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class cr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Mr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Xi(z.min(),i,new ue(Y),pt(),Z())}}class Mr{constructor(e,t,r,i,o){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Mr(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class xh{constructor(e,t){this.targetId=e,this.Ce=t}}class Lh{constructor(e,t,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Su{constructor(){this.ve=0,this.Fe=Cu(),this.Me=be.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Z(),t=Z(),r=Z();return this.Fe.forEach((i,o)=>{switch(o){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:j(38017,{changeType:o})}}),new Mr(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Cu()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,te(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class Fy{constructor(e){this.Ge=e,this.ze=new Map,this.je=pt(),this.Je=ii(),this.He=ii(),this.Ye=new ue(Y)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:j(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,i)=>{this.rt(i)&&t(i)})}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const o=i.target;if(uo(o))if(r===0){const a=new U(o.path);this.et(t,a,Ne.newNoDocument(a,z.min()))}else te(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const u=this.ut(e),h=u?this.ct(u,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,d)}$s==null||$s.lt(function(m,E,I,S,V){var F,B,H,K,J,C;const O={localCacheCount:m,existenceFilterCount:E.count,databaseId:I.database,projectId:I.projectId},P=E.unchangedNames;return P&&(O.bloomFilter={applied:V===0,hashCount:(F=P==null?void 0:P.hashCount)!=null?F:0,bitmapLength:(K=(H=(B=P==null?void 0:P.bits)==null?void 0:B.bitmap)==null?void 0:H.length)!=null?K:0,padding:(C=(J=P==null?void 0:P.bits)==null?void 0:J.padding)!=null?C:0,mightContain:y=>{var p;return(p=S==null?void 0:S.mightContain(y))!=null?p:!1}}),O}(a,e.Ce,this.Ge.ht(),u,h))}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:o=0}=t;let a,u;try{a=Lt(r).toUint8Array()}catch(h){if(h instanceof ch)return An("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Wo(a,i,o)}catch(h){return An(h instanceof cr?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),i++)}),i}Tt(e){const t=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&uo(u.target)){const h=new U(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,Ne.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.qe())}});let r=Z();this.He.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(e));const i=new Xi(e,t,this.Ye,this.je,r);return this.je=pt(),this.Je=ii(),this.He=ii(),this.Ye=new ue(Y),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Su,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Te(Y),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Te(Y),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||x("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Su),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ii(){return new ue(U.comparator)}function Cu(){return new ue(U.comparator)}const Uy=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),By=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),qy=(()=>({and:"AND",or:"OR"}))();class jy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ho(n,e){return n.useProto3Json||$i(e)?e:{value:e}}function ki(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Fh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $y(n,e){return ki(n,e.toTimestamp())}function rt(n){return te(!!n,49232),z.fromTimestamp(function(t){const r=xt(t);return new ae(r.seconds,r.nanos)}(n))}function Ko(n,e){return fo(n,e).canonicalString()}function fo(n,e){const t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Uh(n){const e=oe.fromString(n);return te(zh(e),10190,{key:e.toString()}),e}function po(n,e){return Ko(n.databaseId,e.path)}function zs(n,e){const t=Uh(e);if(t.get(1)!==n.databaseId.projectId)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new L(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new U(qh(t))}function Bh(n,e){return Ko(n.databaseId,e)}function zy(n){const e=Uh(n);return e.length===4?oe.emptyPath():qh(e)}function mo(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qh(n){return te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function bu(n,e,t){return{name:po(n,e),fields:t.value.mapValue.fields}}function Hy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:j(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(te(m===void 0||typeof m=="string",58123),be.fromBase64String(m||"")):(te(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),be.fromUint8Array(m||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const m=d.code===void 0?k.UNKNOWN:Mh(d.code);return new L(m,d.message||"")}(a);t=new Lh(r,i,o,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=zs(n,r.document.name),o=rt(r.document.updateTime),a=r.document.createTime?rt(r.document.createTime):z.min(),u=new Be({mapValue:{fields:r.document.fields}}),h=Ne.newFoundDocument(i,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];t=new pi(d,m,h.key,h)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=zs(n,r.document),o=r.readTime?rt(r.readTime):z.min(),a=Ne.newNoDocument(i,o),u=r.removedTargetIds||[];t=new pi([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=zs(n,r.document),o=r.removedTargetIds||[];t=new pi([],o,i,null)}else{if(!("filter"in e))return j(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:o}=r,a=new Oy(i,o),u=r.targetId;t=new xh(u,a)}}return t}function Wy(n,e){let t;if(e instanceof Or)t={update:bu(n,e.key,e.value)};else if(e instanceof zo)t={delete:po(n,e.key)};else if(e instanceof $t)t={update:bu(n,e.key,e.data),updateMask:tE(e.fieldMask)};else{if(!(e instanceof Vy))return j(16599,{Vt:e.type});t={verify:po(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Rr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Sr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Pi)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw j(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:$y(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:j(27497)}(n,e.precondition)),t}function Ky(n,e){return n&&n.length>0?(te(e!==void 0,14353),n.map(t=>function(i,o){let a=i.updateTime?rt(i.updateTime):rt(o);return a.isEqual(z.min())&&(a=rt(o)),new by(a,i.transformResults||[])}(t,e))):[]}function Gy(n,e){return{documents:[Bh(n,e.path)]}}function Qy(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Bh(n,i);const o=function(d){if(d.length!==0)return $h(at.create(d,"and"))}(e.filters);o&&(t.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(I){return{field:mn(I.field),direction:Yy(I.dir)}}(m))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=ho(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:t,parent:i}}function Jy(n){let e=zy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){te(r===1,65062);const m=t.from[0];m.allDescendants?i=m.collectionId:e=e.child(m.collectionId)}let o=[];t.where&&(o=function(E){const I=jh(E);return I instanceof at&&Eh(I)?I.getFilters():[I]}(t.where));let a=[];t.orderBy&&(a=function(E){return E.map(I=>function(V){return new bi(gn(V.field),function(P){switch(P){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(V.direction))}(I))}(t.orderBy));let u=null;t.limit&&(u=function(E){let I;return I=typeof E=="object"?E.value:E,$i(I)?null:I}(t.limit));let h=null;t.startAt&&(h=function(E){const I=!!E.before,S=E.values||[];return new Ci(S,I)}(t.startAt));let d=null;return t.endAt&&(d=function(E){const I=!E.before,S=E.values||[];return new Ci(S,I)}(t.endAt)),fy(e,i,a,o,u,"F",h,d)}function Xy(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return j(28987,{purpose:i})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function jh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=gn(t.unaryFilter.field);return ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=gn(t.unaryFilter.field);return ve.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=gn(t.unaryFilter.field);return ve.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=gn(t.unaryFilter.field);return ve.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return j(61313);default:return j(60726)}}(n):n.fieldFilter!==void 0?function(t){return ve.create(gn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return j(58110);default:return j(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return at.create(t.compositeFilter.filters.map(r=>jh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return j(1026)}}(t.compositeFilter.op))}(n):j(30097,{filter:n})}function Yy(n){return Uy[n]}function Zy(n){return By[n]}function eE(n){return qy[n]}function mn(n){return{fieldPath:n.canonicalString()}}function gn(n){return Se.fromServerFormat(n.fieldPath)}function $h(n){return n instanceof ve?function(t){if(t.op==="=="){if(mu(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NAN"}};if(pu(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(mu(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NOT_NAN"}};if(pu(t.value))return{unaryFilter:{field:mn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mn(t.field),op:Zy(t.op),value:t.value}}}(n):n instanceof at?function(t){const r=t.getFilters().map(i=>$h(i));return r.length===1?r[0]:{compositeFilter:{op:eE(t.op),filters:r}}}(n):j(54877,{filter:n})}function tE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function zh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,r,i,o=z.min(),a=z.min(),u=be.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new bt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new bt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e){this.yt=e}}function rE(n){const e=Jy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(){this.Cn=new sE}addToCollectionParentIndex(e,t){return this.Cn.add(t),b.resolve()}getCollectionParents(e,t){return b.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return b.resolve()}deleteFieldIndex(e,t){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,t){return b.resolve()}getDocumentsMatchingTarget(e,t){return b.resolve(null)}getIndexType(e,t){return b.resolve(0)}getFieldIndexes(e,t){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,t){return b.resolve(Mt.min())}getMinOffsetFromCollectionGroup(e,t){return b.resolve(Mt.min())}updateCollectionGroup(e,t,r){return b.resolve()}updateIndexEntries(e,t){return b.resolve()}}class sE{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Te(oe.comparator),o=!i.has(r);return this.index[t]=i.add(r),o}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Te(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Hh=41943040;class Fe{static withCacheSize(e){return new Fe(e,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.DEFAULT_COLLECTION_PERCENTILE=10,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Fe.DEFAULT=new Fe(Hh,Fe.DEFAULT_COLLECTION_PERCENTILE,Fe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Fe.DISABLED=new Fe(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new bn(0)}static cr(){return new bn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ku="LruGarbageCollector",oE=1048576;function Vu([n,e],[t,r]){const i=Y(n,t);return i===0?Y(e,r):i}class aE{constructor(e){this.Ir=e,this.buffer=new Te(Vu),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class cE{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){x(ku,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ln(t)?x(ku,"Ignoring IndexedDB error during garbage collection: ",t):await xn(t)}await this.Vr(3e5)})}}class uE{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return b.resolve(ji.ce);const r=new aE(t);return this.mr.forEachTarget(e,i=>r.Ar(i.sequenceNumber)).next(()=>this.mr.pr(e,i=>r.Ar(i))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(x("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Pu)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(x("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pu):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(E=>(E>this.params.maximumSequenceNumbersToCollect?(x("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${E}`),i=this.params.maximumSequenceNumbersToCollect):i=E,a=Date.now(),this.nthSequenceNumber(e,i))).next(E=>(r=E,u=Date.now(),this.removeTargets(e,r,t))).next(E=>(o=E,h=Date.now(),this.removeOrphanedDocuments(e,r))).next(E=>(d=Date.now(),fn()<=X.DEBUG&&x("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${i} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${E} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:E})))}}function lE(n,e){return new uE(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ne.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?b.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dE{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&mr(r.mutation,i,ze.empty(),ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=Yt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(o=>{let a=ar();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Yt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(o=>{t.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((a,u)=>{t.set(a,u)})})}computeViews(e,t,r,i){let o=pt();const a=pr(),u=function(){return pr()}();return t.forEach((h,d)=>{const m=r.get(d.key);i.has(d.key)&&(m===void 0||m.mutation instanceof $t)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),mr(m.mutation,d,m.mutation.getFieldMask(),ae.now())):a.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),t.forEach((d,m)=>{var E;return u.set(d,new dE(m,(E=a.get(d))!=null?E:null))}),u))}recalculateAndSaveOverlays(e,t){const r=pr();let i=new ue((a,u)=>a-u),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=t.get(h);if(d===null)return;let m=r.get(h)||ze.empty();m=u.applyToLocalView(d,m),r.set(h,m);const E=(i.get(u.batchId)||Z()).add(h);i=i.insert(u.batchId,E)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,E=Ch();m.forEach(I=>{if(!o.has(I)){const S=Nh(t.get(I),r.get(I));S!==null&&E.set(I,S),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,E))}return b.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return U.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):py(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(o=>{const a=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-o.size):b.resolve(Yt());let u=Tr,h=o;return a.next(d=>b.forEach(d,(m,E)=>(u<E.largestBatchId&&(u=E.largestBatchId),o.get(m)?b.resolve():this.remoteDocumentCache.getEntry(e,m).next(I=>{h=h.insert(m,I)}))).next(()=>this.populateOverlays(e,d,o)).next(()=>this.computeViews(e,h,d,Z())).next(m=>({batchId:u,changes:Sh(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new U(t)).next(r=>{let i=ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const o=t.collectionGroup;let a=ar();return this.indexManager.getCollectionParents(e,o).next(u=>b.forEach(u,h=>{const d=function(E,I){return new Hi(I,null,E.explicitOrderBy.slice(),E.filters.slice(),E.limit,E.limitType,E.startAt,E.endAt)}(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(m=>{m.forEach((E,I)=>{a=a.insert(E,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,o,i))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,Ne.newInvalidDocument(m)))});let u=ar();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&mr(m.mutation,d,ze.empty(),ae.now()),Gi(t,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return b.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:rt(i.createTime)}}(t)),b.resolve()}getNamedQuery(e,t){return b.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(i){return{name:i.name,query:rE(i.bundledQuery),readTime:rt(i.readTime)}}(t)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(){this.overlays=new ue(U.comparator),this.qr=new Map}getOverlay(e,t){return b.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Yt();return b.forEach(t,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,o)=>{this.St(e,t,o)}),b.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.qr.delete(r)),b.resolve()}getOverlaysForCollection(e,t,r){const i=Yt(),o=t.length+1,a=new U(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&i.set(h.getKey(),h)}return b.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let o=new ue((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Yt(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=Yt(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=i)););return b.resolve(u)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Ny(t,r));let o=this.qr.get(t);o===void 0&&(o=Z(),this.qr.set(t,o)),this.qr.set(t,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.Qr=new Te(we.$r),this.Ur=new Te(we.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new we(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new we(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new U(new oe([])),r=new we(t,e),i=new we(t,e+1),o=[];return this.Ur.forEachInRange([r,i],a=>{this.Gr(a),o.push(a.key)}),o}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new U(new oe([])),r=new we(t,e),i=new we(t,e+1);let o=Z();return this.Ur.forEachInRange([r,i],a=>{o=o.add(a.key)}),o}containsKey(e){const t=new we(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class we{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return U.comparator(e.key,t.key)||Y(e.Yr,t.Yr)}static Kr(e,t){return Y(e.Yr,t.Yr)||U.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Te(we.$r)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const o=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Dy(o,t,r,i);this.mutationQueue.push(a);for(const u of i)this.Zr=this.Zr.add(new we(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return b.resolve(a)}lookupMutationBatch(e,t){return b.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),o=i<0?0:i;return b.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?Fo:this.tr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new we(t,0),i=new we(t,Number.POSITIVE_INFINITY),o=[];return this.Zr.forEachInRange([r,i],a=>{const u=this.Xr(a.Yr);o.push(u)}),b.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Te(Y);return t.forEach(i=>{const o=new we(i,0),a=new we(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([o,a],u=>{r=r.add(u.Yr)})}),b.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let o=r;U.isDocumentKey(o)||(o=o.child(""));const a=new we(new U(o),0);let u=new Te(Y);return this.Zr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(h.Yr)),!0)},a),b.resolve(this.ti(u))}ti(e){const t=[];return e.forEach(r=>{const i=this.Xr(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){te(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return b.forEach(t.mutations,i=>{const o=new we(i.key,t.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new we(t,0),i=this.Zr.firstAfterOrEqual(r);return b.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e){this.ri=e,this.docs=function(){return new ue(U.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),o=i?i.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return b.resolve(r?r.document.mutableCopy():Ne.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():Ne.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let o=pt();const a=t.path,u=new U(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||W_(H_(m),r)<=0||(i.has(m.key)||Gi(t,m))&&(o=o.insert(m.key,m.mutableCopy()))}return b.resolve(o)}getAllFromCollectionGroup(e,t,r,i){j(9500)}ii(e,t){return b.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new EE(this)}getSize(e){return b.resolve(this.size)}}class EE extends hE{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)}),b.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vE{constructor(e){this.persistence=e,this.si=new cn(t=>qo(t),jo),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.oi=0,this._i=new Go,this.targetCount=0,this.ai=bn.ur()}forEachTarget(e,t){return this.si.forEach((r,i)=>t(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),b.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new bn(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,b.resolve()}updateTargetData(e,t){return this.Pr(t),b.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,t,r){let i=0;const o=[];return this.si.forEach((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.si.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),b.waitFor(o).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return b.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),b.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,o=[];return i&&t.forEach(a=>{o.push(i.markPotentiallyOrphaned(e,a))}),b.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),b.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return b.resolve(r)}containsKey(e,t){return b.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,t){this.ui={},this.overlays={},this.ci=new ji(0),this.li=!1,this.li=!0,this.hi=new gE,this.referenceDelegate=e(this),this.Pi=new vE(this),this.indexManager=new iE,this.remoteDocumentCache=function(i){return new yE(i)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new nE(t),this.Ii=new pE(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mE,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new _E(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){x("MemoryPersistence","Starting transaction:",e);const i=new TE(this.ci.next());return this.referenceDelegate.Ei(),r(i).next(o=>this.referenceDelegate.di(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Ai(e,t){return b.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class TE extends G_{constructor(e){super(),this.currentSequenceNumber=e}}class Qo{constructor(e){this.persistence=e,this.Ri=new Go,this.Vi=null}static mi(e){return new Qo(e)}get fi(){if(this.Vi)return this.Vi;throw j(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),b.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),b.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(i=>this.fi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(o=>this.fi.add(o.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.fi,r=>{const i=U.fromPath(r);return this.gi(e,i).next(o=>{o||t.removeEntry(i,z.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return b.or([()=>b.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class Vi{constructor(e,t){this.persistence=e,this.pi=new cn(r=>X_(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=lE(this,t)}static mi(e,t){return new Vi(e,t)}Ei(){}di(e){return b.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(i=>r+i))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return b.forEach(this.pi,(r,i)=>this.br(e,r,i).next(o=>o?b.resolve():t(i)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ii(e,a=>this.br(e,a,t).next(u=>{u||(r++,o.removeEntry(a,z.min()))})).next(()=>o.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),b.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=hi(e.data.value)),t}br(e,t,r){return b.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Z(),i=Z();for(const o of t.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new Jo(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return tp()?8:Q_(Oe())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const o={result:null};return this.ys(e,t).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ws(e,t,i,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new IE;return this.Ss(e,t,a).next(u=>{if(o.result=u,this.Vs)return this.bs(e,t,a,u.size)})}).next(()=>o.result)}bs(e,t,r,i){return r.documentReadCount<this.fs?(fn()<=X.DEBUG&&x("QueryEngine","SDK will not create cache indexes for query:",pn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),b.resolve()):(fn()<=X.DEBUG&&x("QueryEngine","Query:",pn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(fn()<=X.DEBUG&&x("QueryEngine","The SDK decides to create cache indexes for query:",pn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):b.resolve())}ys(e,t){if(Eu(t))return b.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=lo(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const a=Z(...o);return this.ps.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(h=>{const d=this.Ds(t,u);return this.Cs(t,d,a,h.readTime)?this.ys(e,lo(t,null,"F")):this.vs(e,d,t,h)}))})))}ws(e,t,r,i){return Eu(t)||i.isEqual(z.min())?b.resolve(null):this.ps.getDocuments(e,r).next(o=>{const a=this.Ds(t,o);return this.Cs(t,a,r,i)?b.resolve(null):(fn()<=X.DEBUG&&x("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),pn(t)),this.vs(e,a,t,z_(i,Tr)).next(u=>u))})}Ds(e,t){let r=new Te(Ah(e));return t.forEach((i,o)=>{Gi(e,o)&&(r=r.add(o))}),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ss(e,t,r){return fn()<=X.DEBUG&&x("QueryEngine","Using full collection scan to execute query:",pn(t)),this.ps.getDocumentsMatchingQuery(e,t,Mt.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next(o=>(t.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo="LocalStore",AE=3e8;class RE{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new ue(Y),this.xs=new cn(o=>qo(o),jo),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fE(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function SE(n,e,t,r){return new RE(n,e,t,r)}async function Kh(n,e){const t=W(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Z();for(const d of i){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return t.localDocuments.getDocuments(r,h).next(d=>({Ls:d,removedBatchIds:a,addedBatchIds:u}))})})}function CE(n,e){const t=W(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=t.Ns.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const E=d.batch,I=E.keys();let S=b.resolve();return I.forEach(V=>{S=S.next(()=>m.getEntry(h,V)).next(O=>{const P=d.docVersions.get(V);te(P!==null,48541),O.version.compareTo(P)<0&&(E.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),m.addEntry(O)))})}),S.next(()=>u.mutationQueue.removeMutationBatch(h,E))}(t,r,e,o).next(()=>o.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Gh(n){const e=W(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function bE(n,e){const t=W(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const u=[];e.targetChanges.forEach((m,E)=>{const I=i.get(E);if(!I)return;u.push(t.Pi.removeMatchingKeys(o,m.removedDocuments,E).next(()=>t.Pi.addMatchingKeys(o,m.addedDocuments,E)));let S=I.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(E)!==null?S=S.withResumeToken(be.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):m.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(m.resumeToken,r)),i=i.insert(E,S),function(O,P,F){return O.resumeToken.approximateByteSize()===0||P.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=AE?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(I,S,m)&&u.push(t.Pi.updateTargetData(o,S))});let h=pt(),d=Z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(PE(o,a,e.documentUpdates).next(m=>{h=m.ks,d=m.qs})),!r.isEqual(z.min())){const m=t.Pi.getLastRemoteSnapshotVersion(o).next(E=>t.Pi.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return b.waitFor(u).next(()=>a.apply(o)).next(()=>t.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(t.Ms=i,o))}function PE(n,e,t){let r=Z(),i=Z();return t.forEach(o=>r=r.add(o)),e.getEntries(n,r).next(o=>{let a=pt();return t.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),h.isNoDocument()&&h.version.isEqual(z.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):x(Xo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{ks:a,qs:i}})}function kE(n,e){const t=W(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Fo),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function VE(n,e){const t=W(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.Pi.getTargetData(r,e).next(o=>o?(i=o,b.resolve(i)):t.Pi.allocateTargetId(r).next(a=>(i=new bt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function go(n,e,t){const r=W(n),i=r.Ms.get(e),o=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Ln(a))throw a;x(Xo,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function Du(n,e,t){const r=W(n);let i=z.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const E=W(h),I=E.xs.get(m);return I!==void 0?b.resolve(E.Ms.get(I)):E.Pi.getTargetData(d,m)}(r,a,nt(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?i:z.min(),t?o:Z())).next(u=>(DE(r,gy(e),u),{documents:u,Qs:o})))}function DE(n,e,t){let r=n.Os.get(e)||z.min();t.forEach((i,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Os.set(e,r)}class Nu{constructor(){this.activeTargetIds=Iy()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class NE{constructor(){this.Mo=new Nu,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Nu,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="ConnectivityMonitor";class Mu{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){x(Ou,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){x(Ou,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si=null;function _o(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs="RestConnection",ME={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class xE{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Ri?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,o){const a=_o(),u=this.zo(e,t.toUriEncodedString());x(Hs,`Sending RPC '${e}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(h,i,o);const{host:d}=new URL(u),m=Vn(d);return this.Jo(e,u,h,r,m).then(E=>(x(Hs,`Received RPC '${e}' ${a}: `,E),E),E=>{throw An(Hs,`RPC '${e}' ${a} failed with error: `,E,"url: ",u,"request:",r),E})}Ho(e,t,r,i,o,a){return this.Go(e,t,r,i,o)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,o)=>e[o]=i),r&&r.headers.forEach((i,o)=>e[o]=i)}zo(e,t){const r=ME[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class FE extends xE{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,o){const a=_o();return new Promise((u,h)=>{const d=new Xl;d.setWithCredentials(!0),d.listenOnce(Yl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case li.NO_ERROR:const E=d.getResponseJson();x(Ve,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(E)),u(E);break;case li.TIMEOUT:x(Ve,`RPC '${e}' ${a} timed out`),h(new L(k.DEADLINE_EXCEEDED,"Request time out"));break;case li.HTTP_ERROR:const I=d.getStatus();if(x(Ve,`RPC '${e}' ${a} failed with status:`,I,"response text:",d.getResponseText()),I>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const V=S==null?void 0:S.error;if(V&&V.status&&V.message){const O=function(F){const B=F.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(B)>=0?B:k.UNKNOWN}(V.status);h(new L(O,V.message))}else h(new L(k.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new L(k.UNAVAILABLE,"Connection failed."));break;default:j(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{x(Ve,`RPC '${e}' ${a} completed.`)}});const m=JSON.stringify(i);x(Ve,`RPC '${e}' ${a} sending request:`,i),d.send(t,"POST",m,r,15)})}T_(e,t,r){const i=_o(),o=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=th(),u=eh(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.useFetchStreams=!0),this.jo(h.initMessageHeaders,t,r),h.encodeInitMessageHeaders=!0;const m=o.join("");x(Ve,`Creating RPC '${e}' stream ${i}: ${m}`,h);const E=a.createWebChannel(m,h);this.I_(E);let I=!1,S=!1;const V=new LE({Yo:P=>{S?x(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(I||(x(Ve,`Opening RPC '${e}' stream ${i} transport.`),E.open(),I=!0),x(Ve,`RPC '${e}' stream ${i} sending:`,P),E.send(P))},Zo:()=>E.close()}),O=(P,F,B)=>{P.listen(F,H=>{try{B(H)}catch(K){setTimeout(()=>{throw K},0)}})};return O(E,or.EventType.OPEN,()=>{S||(x(Ve,`RPC '${e}' stream ${i} transport opened.`),V.o_())}),O(E,or.EventType.CLOSE,()=>{S||(S=!0,x(Ve,`RPC '${e}' stream ${i} transport closed`),V.a_(),this.E_(E))}),O(E,or.EventType.ERROR,P=>{S||(S=!0,An(Ve,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),V.a_(new L(k.UNAVAILABLE,"The operation could not be completed")))}),O(E,or.EventType.MESSAGE,P=>{var F;if(!S){const B=P.data[0];te(!!B,16349);const H=B,K=(H==null?void 0:H.error)||((F=H[0])==null?void 0:F.error);if(K){x(Ve,`RPC '${e}' stream ${i} received error:`,K);const J=K.status;let C=function(g){const T=me[g];if(T!==void 0)return Mh(T)}(J),y=K.message;C===void 0&&(C=k.INTERNAL,y="Unknown error status: "+J+" with message "+K.message),S=!0,V.a_(new L(C,y)),E.close()}else x(Ve,`RPC '${e}' stream ${i} received:`,B),V.u_(B)}}),O(u,Zl.STAT_EVENT,P=>{P.stat===io.PROXY?x(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):P.stat===io.NOPROXY&&x(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{V.__()},0),V}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Ws(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){return new jy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e,t,r=1e3,i=1.5,o=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=o,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&x("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="PersistentStream";class Jh{constructor(e,t,r,i,o,a,u,h){this.Mi=e,this.S_=r,this.b_=i,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Qh(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===t&&this.G_(r,i)},r=>{e(()=>{const i=new L(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return x(xu,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(x(xu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UE extends Jh{constructor(e,t,r,i,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Hy(this.serializer,e),r=function(o){if(!("targetChange"in o))return z.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?z.min():a.readTime?rt(a.readTime):z.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=mo(this.serializer),t.addTarget=function(o,a){let u;const h=a.target;if(u=uo(h)?{documents:Gy(o,h)}:{query:Qy(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Fh(o,a.resumeToken);const d=ho(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(z.min())>0){u.readTime=ki(o,a.snapshotVersion.toTimestamp());const d=ho(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=Xy(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=mo(this.serializer),t.removeTarget=e,this.q_(t)}}class BE extends Jh{constructor(e,t,r,i,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=o}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Ky(e.writeResults,e.commitTime),r=rt(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=mo(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Wy(this.serializer,r))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{}class jE extends qE{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Go(e,fo(t,r),i,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new L(k.UNKNOWN,o.toString())})}Ho(e,t,r,i,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ho(e,fo(t,r),i,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(k.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class $E{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ft(t),this.aa=!1):x("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const on="RemoteStore";class zE{constructor(e,t,r,i,o){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=o,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{un(this)&&(x(on,"Restarting streams for network reachability change."),await async function(h){const d=W(h);d.Ea.add(4),await xr(d),d.Ra.set("Unknown"),d.Ea.delete(4),await Zi(d)}(this))})}),this.Ra=new $E(r,i)}}async function Zi(n){if(un(n))for(const e of n.da)await e(!0)}async function xr(n){for(const e of n.da)await e(!1)}function Xh(n,e){const t=W(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ta(t)?ea(t):Fn(t).O_()&&Zo(t,e))}function Yo(n,e){const t=W(n),r=Fn(t);t.Ia.delete(e),r.O_()&&Yh(t,e),t.Ia.size===0&&(r.O_()?r.L_():un(t)&&t.Ra.set("Unknown"))}function Zo(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Fn(n).Y_(e)}function Yh(n,e){n.Va.Ue(e),Fn(n).Z_(e)}function ea(n){n.Va=new Fy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),Fn(n).start(),n.Ra.ua()}function ta(n){return un(n)&&!Fn(n).x_()&&n.Ia.size>0}function un(n){return W(n).Ea.size===0}function Zh(n){n.Va=void 0}async function HE(n){n.Ra.set("Online")}async function WE(n){n.Ia.forEach((e,t)=>{Zo(n,e)})}async function KE(n,e){Zh(n),ta(n)?(n.Ra.ha(e),ea(n)):n.Ra.set("Unknown")}async function GE(n,e,t){if(n.Ra.set("Online"),e instanceof Lh&&e.state===2&&e.cause)try{await async function(i,o){const a=o.cause;for(const u of o.targetIds)i.Ia.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.Ia.delete(u),i.Va.removeTarget(u))}(n,e)}catch(r){x(on,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Di(n,r)}else if(e instanceof pi?n.Va.Ze(e):e instanceof xh?n.Va.st(e):n.Va.tt(e),!t.isEqual(z.min()))try{const r=await Gh(n.localStore);t.compareTo(r)>=0&&await function(o,a){const u=o.Va.Tt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(be.EMPTY_BYTE_STRING,m.snapshotVersion)),Yh(o,h);const E=new bt(m.target,h,d,m.sequenceNumber);Zo(o,E)}),o.remoteSyncer.applyRemoteEvent(u)}(n,t)}catch(r){x(on,"Failed to raise snapshot:",r),await Di(n,r)}}async function Di(n,e,t){if(!Ln(e))throw e;n.Ea.add(1),await xr(n),n.Ra.set("Offline"),t||(t=()=>Gh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{x(on,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Zi(n)})}function ed(n,e){return e().catch(t=>Di(n,t,e))}async function es(n){const e=W(n),t=Ut(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fo;for(;QE(e);)try{const i=await kE(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,JE(e,i)}catch(i){await Di(e,i)}td(e)&&nd(e)}function QE(n){return un(n)&&n.Ta.length<10}function JE(n,e){n.Ta.push(e);const t=Ut(n);t.O_()&&t.X_&&t.ea(e.mutations)}function td(n){return un(n)&&!Ut(n).x_()&&n.Ta.length>0}function nd(n){Ut(n).start()}async function XE(n){Ut(n).ra()}async function YE(n){const e=Ut(n);for(const t of n.Ta)e.ea(t.mutations)}async function ZE(n,e,t){const r=n.Ta.shift(),i=Ho.from(r,e,t);await ed(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await es(n)}async function ev(n,e){e&&Ut(n).X_&&await async function(r,i){if(function(a){return My(a)&&a!==k.ABORTED}(i.code)){const o=r.Ta.shift();Ut(r).B_(),await ed(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await es(r)}}(n,e),td(n)&&nd(n)}async function Lu(n,e){const t=W(n);t.asyncQueue.verifyOperationInProgress(),x(on,"RemoteStore received new credentials");const r=un(t);t.Ea.add(3),await xr(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Zi(t)}async function tv(n,e){const t=W(n);e?(t.Ea.delete(2),await Zi(t)):e||(t.Ea.add(2),await xr(t),t.Ra.set("Unknown"))}function Fn(n){return n.ma||(n.ma=function(t,r,i){const o=W(t);return o.sa(),new UE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Xo:HE.bind(null,n),t_:WE.bind(null,n),r_:KE.bind(null,n),H_:GE.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),ta(n)?ea(n):n.Ra.set("Unknown")):(await n.ma.stop(),Zh(n))})),n.ma}function Ut(n){return n.fa||(n.fa=function(t,r,i){const o=W(t);return o.sa(),new BE(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:XE.bind(null,n),r_:ev.bind(null,n),ta:YE.bind(null,n),na:ZE.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await es(n)):(await n.fa.stop(),n.Ta.length>0&&(x(on,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t,r,i,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,o){const a=Date.now()+r,u=new na(e,t,a,i,o);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ra(n,e){if(ft("AsyncQueue",`${e}: ${n}`),Ln(n))return new L(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{static emptySet(e){return new Tn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||U.comparator(t.key,r.key):(t,r)=>U.comparator(t.key,r.key),this.keyedMap=ar(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Tn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,o=r.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Tn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.ga=new ue(U.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):j(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Pn{constructor(e,t,r,i,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,o){const a=[];return t.forEach(u=>{a.push({type:0,doc:u})}),new Pn(e,t,Tn.emptySet(t),a,r,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ki(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class rv{constructor(){this.queries=Uu(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=W(t),o=i.queries;i.queries=Uu(),o.forEach((a,u)=>{for(const h of u.Sa)h.onError(r)})})(this,new L(k.ABORTED,"Firestore shutting down"))}}function Uu(){return new cn(n=>wh(n),Ki)}async function ia(n,e){const t=W(n);let r=3;const i=e.query;let o=t.queries.get(i);o?!o.ba()&&e.Da()&&(r=2):(o=new nv,r=e.Da()?0:1);try{switch(r){case 0:o.wa=await t.onListen(i,!0);break;case 1:o.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const u=ra(a,`Initialization of query '${pn(e.query)}' failed`);return void e.onError(u)}t.queries.set(i,o),o.Sa.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&oa(t)}async function sa(n,e){const t=W(n),r=e.query;let i=3;const o=t.queries.get(r);if(o){const a=o.Sa.indexOf(e);a>=0&&(o.Sa.splice(a,1),o.Sa.length===0?i=e.Da()?0:1:!o.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function iv(n,e){const t=W(n);let r=!1;for(const i of e){const o=i.query,a=t.queries.get(o);if(a){for(const u of a.Sa)u.Fa(i)&&(r=!0);a.wa=i}}r&&oa(t)}function sv(n,e,t){const r=W(n),i=r.queries.get(e);if(i)for(const o of i.Sa)o.onError(t);r.queries.delete(e)}function oa(n){n.Ca.forEach(e=>{e.next()})}var yo,Bu;(Bu=yo||(yo={})).Ma="default",Bu.Cache="cache";class aa{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Pn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Pn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==yo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.key=e}}class id{constructor(e){this.key=e}}class ov{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Z(),this.mutatedKeys=Z(),this.eu=Ah(e),this.tu=new Tn(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Fu,i=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=i,u=!1;const h=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((m,E)=>{const I=i.get(m),S=Gi(this.query,E)?E:null,V=!!I&&this.mutatedKeys.has(I.key),O=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let P=!1;I&&S?I.data.isEqual(S.data)?V!==O&&(r.track({type:3,doc:S}),P=!0):this.su(I,S)||(r.track({type:2,doc:S}),P=!0,(h&&this.eu(S,h)>0||d&&this.eu(S,d)<0)&&(u=!0)):!I&&S?(r.track({type:0,doc:S}),P=!0):I&&!S&&(r.track({type:1,doc:I}),P=!0,(h||d)&&(u=!0)),P&&(S?(a=a.add(S),o=O?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Cs:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((m,E)=>function(S,V){const O=P=>{switch(P){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return j(20277,{Rt:P})}};return O(S)-O(V)}(m.type,E.type)||this.eu(m.doc,E.doc)),this.ou(r),i=i!=null?i:!1;const u=t&&!i?this._u():[],h=this.Xa.size===0&&this.current&&!i?1:0,d=h!==this.Za;return this.Za=h,a.length!==0||d?{snapshot:new Pn(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fu,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new id(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new rd(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=Z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Pn.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const ca="SyncEngine";class av{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cv{constructor(e){this.key=e,this.hu=!1}}class uv{constructor(e,t,r,i,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new cn(u=>wh(u),Ki),this.Iu=new Map,this.Eu=new Set,this.du=new ue(U.comparator),this.Au=new Map,this.Ru=new Go,this.Vu={},this.mu=new Map,this.fu=bn.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function lv(n,e,t=!0){const r=ld(n);let i;const o=r.Tu.get(e);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.lu()):i=await sd(r,e,t,!0),i}async function hv(n,e){const t=ld(n);await sd(t,e,!0,!1)}async function sd(n,e,t,r){const i=await VE(n.localStore,nt(e)),o=i.targetId,a=n.sharedClientState.addLocalQueryTarget(o,t);let u;return r&&(u=await dv(n,e,o,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Xh(n.remoteStore,i),u}async function dv(n,e,t,r,i){n.pu=(E,I,S)=>async function(O,P,F,B){let H=P.view.ru(F);H.Cs&&(H=await Du(O.localStore,P.query,!1).then(({documents:y})=>P.view.ru(y,H)));const K=B&&B.targetChanges.get(P.targetId),J=B&&B.targetMismatches.get(P.targetId)!=null,C=P.view.applyChanges(H,O.isPrimaryClient,K,J);return ju(O,P.targetId,C.au),C.snapshot}(n,E,I,S);const o=await Du(n.localStore,e,!0),a=new ov(e,o.Qs),u=a.ru(o.documents),h=Mr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(u,n.isPrimaryClient,h);ju(n,t,d.au);const m=new av(e,t,a);return n.Tu.set(e,m),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),d.snapshot}async function fv(n,e,t){const r=W(n),i=r.Tu.get(e),o=r.Iu.get(i.targetId);if(o.length>1)return r.Iu.set(i.targetId,o.filter(a=>!Ki(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await go(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Yo(r.remoteStore,i.targetId),Eo(r,i.targetId)}).catch(xn)):(Eo(r,i.targetId),await go(r.localStore,i.targetId,!0))}async function pv(n,e){const t=W(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Yo(t.remoteStore,r.targetId))}async function mv(n,e,t){const r=Iv(n);try{const i=await function(a,u){const h=W(a),d=ae.now(),m=u.reduce((S,V)=>S.add(V.key),Z());let E,I;return h.persistence.runTransaction("Locally write mutations","readwrite",S=>{let V=pt(),O=Z();return h.Ns.getEntries(S,m).next(P=>{V=P,V.forEach((F,B)=>{B.isValidDocument()||(O=O.add(F))})}).next(()=>h.localDocuments.getOverlayedDocuments(S,V)).next(P=>{E=P;const F=[];for(const B of u){const H=ky(B,E.get(B.key).overlayedDocument);H!=null&&F.push(new $t(B.key,H,gh(H.value.mapValue),We.exists(!0)))}return h.mutationQueue.addMutationBatch(S,d,F,u)}).next(P=>{I=P;const F=P.applyToLocalDocumentSet(E,O);return h.documentOverlayCache.saveOverlays(S,P.batchId,F)})}).then(()=>({batchId:I.batchId,changes:Sh(E)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,h){let d=a.Vu[a.currentUser.toKey()];d||(d=new ue(Y)),d=d.insert(u,h),a.Vu[a.currentUser.toKey()]=d}(r,i.batchId,t),await Lr(r,i.changes),await es(r.remoteStore)}catch(i){const o=ra(i,"Failed to persist write");t.reject(o)}}async function od(n,e){const t=W(n);try{const r=await bE(t.localStore,e);e.targetChanges.forEach((i,o)=>{const a=t.Au.get(o);a&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?a.hu=!0:i.modifiedDocuments.size>0?te(a.hu,14607):i.removedDocuments.size>0&&(te(a.hu,42227),a.hu=!1))}),await Lr(t,r,e)}catch(r){await xn(r)}}function qu(n,e,t){const r=W(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach((o,a)=>{const u=a.view.va(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const h=W(a);h.onlineState=u;let d=!1;h.queries.forEach((m,E)=>{for(const I of E.Sa)I.va(u)&&(d=!0)}),d&&oa(h)}(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function gv(n,e,t){const r=W(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),o=i&&i.key;if(o){let a=new ue(U.comparator);a=a.insert(o,Ne.newNoDocument(o,z.min()));const u=Z().add(o),h=new Xi(z.min(),new Map,new ue(Y),a,u);await od(r,h),r.du=r.du.remove(o),r.Au.delete(e),ua(r)}else await go(r.localStore,e,!1).then(()=>Eo(r,e,t)).catch(xn)}async function _v(n,e){const t=W(n),r=e.batch.batchId;try{const i=await CE(t.localStore,e);cd(t,r,null),ad(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Lr(t,i)}catch(i){await xn(i)}}async function yv(n,e,t){const r=W(n);try{const i=await function(a,u){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(E=>(te(E!==null,37113),m=E.keys(),h.mutationQueue.removeMutationBatch(d,E))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,e);cd(r,e,t),ad(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Lr(r,i)}catch(i){await xn(i)}}function ad(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function cd(n,e,t){const r=W(n);let i=r.Vu[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(t?o.reject(t):o.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Eo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||ud(n,r)})}function ud(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Yo(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ua(n))}function ju(n,e,t){for(const r of t)r instanceof rd?(n.Ru.addReference(r.key,e),Ev(n,r)):r instanceof id?(x(ca,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||ud(n,r.key)):j(19791,{wu:r})}function Ev(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(x(ca,"New document in limbo: "+t),n.Eu.add(r),ua(n))}function ua(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new U(oe.fromString(e)),r=n.fu.next();n.Au.set(r,new cv(t)),n.du=n.du.insert(t,r),Xh(n.remoteStore,new bt(nt(Wi(t.path)),r,"TargetPurposeLimboResolution",ji.ce))}}async function Lr(n,e,t){const r=W(n),i=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,e,t).then(d=>{var m;if((d||t)&&r.isPrimaryClient){const E=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,E?"current":"not-current")}if(d){i.push(d);const E=Jo.As(h.targetId,d);o.push(E)}}))}),await Promise.all(a),r.Pu.H_(i),await async function(h,d){const m=W(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",E=>b.forEach(d,I=>b.forEach(I.Es,S=>m.persistence.referenceDelegate.addReference(E,I.targetId,S)).next(()=>b.forEach(I.ds,S=>m.persistence.referenceDelegate.removeReference(E,I.targetId,S)))))}catch(E){if(!Ln(E))throw E;x(Xo,"Failed to update sequence numbers: "+E)}for(const E of d){const I=E.targetId;if(!E.fromCache){const S=m.Ms.get(I),V=S.snapshotVersion,O=S.withLastLimboFreeSnapshotVersion(V);m.Ms=m.Ms.insert(I,O)}}}(r.localStore,o))}async function vv(n,e){const t=W(n);if(!t.currentUser.isEqual(e)){x(ca,"User change. New user:",e.toKey());const r=await Kh(t.localStore,e);t.currentUser=e,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new L(k.CANCELLED,a))})}),o.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Lr(t,r.Ls)}}function Tv(n,e){const t=W(n),r=t.Au.get(e);if(r&&r.hu)return Z().add(r.key);{let i=Z();const o=t.Iu.get(e);if(!o)return i;for(const a of o){const u=t.Tu.get(a);i=i.unionWith(u.view.nu)}return i}}function ld(n){const e=W(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=od.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=gv.bind(null,e),e.Pu.H_=iv.bind(null,e.eventManager),e.Pu.yu=sv.bind(null,e.eventManager),e}function Iv(n){const e=W(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=_v.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yv.bind(null,e),e}class Ni{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Yi(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return SE(this.persistence,new wE,e.initialUser,this.serializer)}Cu(e){return new Wh(Qo.mi,this.serializer)}Du(e){return new NE}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ni.provider={build:()=>new Ni};class wv extends Ni{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){te(this.persistence.referenceDelegate instanceof Vi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new cE(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Fe.withCacheSize(this.cacheSizeBytes):Fe.DEFAULT;return new Wh(r=>Vi.mi(r,t),this.serializer)}}class vo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vv.bind(null,this.syncEngine),await tv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rv}()}createDatastore(e){const t=Yi(e.databaseInfo.databaseId),r=function(o){return new FE(o)}(e.databaseInfo);return function(o,a,u,h){return new jE(o,a,u,h)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,o,a,u){return new zE(r,i,o,a,u)}(this.localStore,this.datastore,e.asyncQueue,t=>qu(this.syncEngine,t,0),function(){return Mu.v()?new Mu:new OE}())}createSyncEngine(e,t){return function(i,o,a,u,h,d,m){const E=new uv(i,o,a,u,h,d);return m&&(E.gu=!0),E}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const o=W(i);x(on,"RemoteStore shutting down."),o.Ea.add(5),await xr(o),o.Aa.shutdown(),o.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}vo.provider={build:()=>new vo};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="FirestoreClient";class Av{constructor(e,t,r,i,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=xo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{x(Bt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(x(Bt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ra(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ks(n,e){n.asyncQueue.verifyOperationInProgress(),x(Bt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Kh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function $u(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Rv(n);x(Bt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Lu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Lu(e.remoteStore,i)),n._onlineComponents=e}async function Rv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){x(Bt,"Using user provided OfflineComponentProvider");try{await Ks(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(i){return i.name==="FirebaseError"?i.code===k.FAILED_PRECONDITION||i.code===k.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(t))throw t;An("Error using user provided cache. Falling back to memory cache: "+t),await Ks(n,new Ni)}}else x(Bt,"Using default OfflineComponentProvider"),await Ks(n,new wv(void 0));return n._offlineComponents}async function hd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(x(Bt,"Using user provided OnlineComponentProvider"),await $u(n,n._uninitializedComponentsProvider._online)):(x(Bt,"Using default OnlineComponentProvider"),await $u(n,new vo))),n._onlineComponents}function Sv(n){return hd(n).then(e=>e.syncEngine)}async function Oi(n){const e=await hd(n),t=e.eventManager;return t.onListen=lv.bind(null,e.syncEngine),t.onUnlisten=fv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=hv.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=pv.bind(null,e.syncEngine),t}function Cv(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new la({next:I=>{m.Nu(),a.enqueueAndForget(()=>sa(o,E));const S=I.docs.has(u);!S&&I.fromCache?d.reject(new L(k.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&I.fromCache&&h&&h.source==="server"?d.reject(new L(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),E=new aa(Wi(u.path),m,{includeMetadataChanges:!0,qa:!0});return ia(o,E)}(await Oi(n),n.asyncQueue,e,t,r)),r.promise}function bv(n,e,t={}){const r=new lt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new la({next:I=>{m.Nu(),a.enqueueAndForget(()=>sa(o,E)),I.fromCache&&h.source==="server"?d.reject(new L(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),E=new aa(u,m,{includeMetadataChanges:!0,qa:!0});return ia(o,E)}(await Oi(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zu=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="firestore.googleapis.com",Hu=!0;class Wu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new L(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=fd,this.ssl=Hu}else this.host=e.host,this.ssl=(t=e.ssl)!=null?t:Hu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Hh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oE)throw new L(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dd((r=e.experimentalLongPollingOptions)!=null?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new L(k.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ts{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new L(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new N_;switch(r.type){case"firstParty":return new L_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=zu.get(t);r&&(x("ComponentProvider","Removing Datastore"),zu.delete(t),r.terminate())}(this),Promise.resolve()}}function Pv(n,e,t,r={}){var d;n=je(n,ts);const i=Vn(e),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${e}:${t}`;i&&(ll(`https://${u}`),hl("Firestore",!0)),o.host!==fd&&o.host!==u&&An("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:i,emulatorOptions:r};if(!tn(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,E;if(typeof r.mockUserToken=="string")m=r.mockUserToken,E=De.MOCK_USER;else{m=Wf(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const I=r.mockUserToken.sub||r.mockUserToken.user_id;if(!I)throw new L(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new De(I)}n._authCredentials=new O_(new rh(m,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class pe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new pe(this.firestore,e,this._key)}toJSON(){return{type:pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Nr(t,pe._jsonSchema))return new pe(e,r||null,new U(oe.fromString(t.referencePath)))}}pe._jsonSchemaVersion="firestore/documentReference/1.0",pe._jsonSchema={type:ge("string",pe._jsonSchemaVersion),referencePath:ge("string")};class Ot extends Fr{constructor(e,t,r){super(e,t,Wi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pe(this.firestore,null,new U(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function eT(n,e,...t){if(n=Ce(n),ih("collection","path",e),n instanceof ts){const r=oe.fromString(e,...t);return ou(r),new Ot(n,null,r)}{if(!(n instanceof pe||n instanceof Ot))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return ou(r),new Ot(n.firestore,null,r)}}function kv(n,e,...t){if(n=Ce(n),arguments.length===1&&(e=xo.newId()),ih("doc","path",e),n instanceof ts){const r=oe.fromString(e,...t);return su(r),new pe(n,null,new U(r))}{if(!(n instanceof pe||n instanceof Ot))throw new L(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return su(r),new pe(n.firestore,n instanceof Ot?n.converter:null,new U(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="AsyncQueue";class Gu{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Qh(this,"async_queue_retry"),this._c=()=>{const r=Ws();r&&x(Ku,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ws();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ws();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new lt;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ln(e))throw e;x(Ku,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ft("INTERNAL UNHANDLED ERROR: ",Qu(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=na.createAndSchedule(this,e,t,r,o=>this.hc(o));return this.tc.push(i),i}uc(){this.nc&&j(47125,{Pc:Qu(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Qu(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(n){return function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const o of r)if(o in i&&typeof i[o]=="function")return!0;return!1}(n,["next","error","complete"])}class mt extends ts{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Gu,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gu(e),this._firestoreClient=void 0,await e}}}function Vv(n,e){const t=typeof n=="object"?n:So(),r=typeof n=="string"?n:e||Ri,i=Ro(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=zf("firestore");o&&Pv(i,...o)}return i}function ns(n){if(n._terminated)throw new L(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Dv(n),n._firestoreClient}function Dv(n){var r,i,o;const e=n._freezeSettings(),t=function(u,h,d,m){return new ey(u,h,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,dd(m.experimentalLongPollingOptions),m.useFetchStreams,m.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||((i=e.localCache)==null?void 0:i._offlineComponentProvider)&&((o=e.localCache)==null?void 0:o._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Av(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this._byteString=e}static fromBase64String(e){try{return new He(be.fromBase64String(e))}catch(t){throw new L(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new He(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:He._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Nr(e,He._jsonSchema))return He.fromBase64String(e.bytes)}}He._jsonSchemaVersion="firestore/bytes/1.0",He._jsonSchema={type:ge("string",He._jsonSchemaVersion),bytes:ge("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new L(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new L(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new L(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:it._jsonSchemaVersion}}static fromJSON(e){if(Nr(e,it._jsonSchema))return new it(e.latitude,e.longitude)}}it._jsonSchemaVersion="firestore/geoPoint/1.0",it._jsonSchema={type:ge("string",it._jsonSchemaVersion),latitude:ge("number"),longitude:ge("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==i[o])return!1;return!0}(this._values,e._values)}toJSON(){return{type:st._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Nr(e,st._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new st(e.vectorValues);throw new L(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}st._jsonSchemaVersion="firestore/vectorValue/1.0",st._jsonSchema={type:ge("string",st._jsonSchemaVersion),vectorValues:ge("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=/^__.*__$/;class Ov{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new Or(e,this.data,t,this.fieldTransforms)}}class pd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new $t(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function md(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw j(40011,{Ac:n})}}class ha{constructor(e,t,r,i,o,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Rc(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new ha({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var i;const t=(i=this.path)==null?void 0:i.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Mi(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(md(this.Ac)&&Nv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Mv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Yi(e)}Cc(e,t,r,i=!1){return new ha({Ac:e,methodName:t,Dc:r,path:Se.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function da(n){const e=n._freezeSettings(),t=Yi(n._databaseId);return new Mv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function gd(n,e,t,r,i,o={}){const a=n.Cc(o.merge||o.mergeFields?2:0,e,t,i);pa("Data must be an object, but it was:",a,r);const u=_d(r,a);let h,d;if(o.merge)h=new ze(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const E of o.mergeFields){const I=To(e,E,t);if(!a.contains(I))throw new L(k.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ed(m,I)||m.push(I)}h=new ze(m),d=a.fieldTransforms.filter(E=>h.covers(E.field))}else h=null,d=a.fieldTransforms;return new Ov(new Be(u),h,d)}class ss extends is{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ss}}class fa extends is{_toFieldTransform(e){return new Sy(e.path,new Rr)}isEqual(e){return e instanceof fa}}function xv(n,e,t,r){const i=n.Cc(1,e,t);pa("Data must be an object, but it was:",i,r);const o=[],a=Be.empty();jt(r,(h,d)=>{const m=ma(e,h,t);d=Ce(d);const E=i.yc(m);if(d instanceof ss)o.push(m);else{const I=os(d,E);I!=null&&(o.push(m),a.set(m,I))}});const u=new ze(o);return new pd(a,u,i.fieldTransforms)}function Lv(n,e,t,r,i,o){const a=n.Cc(1,e,t),u=[To(e,r,t)],h=[i];if(o.length%2!=0)throw new L(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)u.push(To(e,o[I])),h.push(o[I+1]);const d=[],m=Be.empty();for(let I=u.length-1;I>=0;--I)if(!Ed(d,u[I])){const S=u[I];let V=h[I];V=Ce(V);const O=a.yc(S);if(V instanceof ss)d.push(S);else{const P=os(V,O);P!=null&&(d.push(S),m.set(S,P))}}const E=new ze(d);return new pd(m,E,a.fieldTransforms)}function os(n,e){if(yd(n=Ce(n)))return pa("Unsupported field value:",e,n),_d(n,e);if(n instanceof is)return function(r,i){if(!md(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,i){const o=[];let a=0;for(const u of r){let h=os(u,i.wc(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,e)}return function(r,i){if((r=Ce(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return wy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ae.fromDate(r);return{timestampValue:ki(i.serializer,o)}}if(r instanceof ae){const o=new ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ki(i.serializer,o)}}if(r instanceof it)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof He)return{bytesValue:Fh(i.serializer,r._byteString)};if(r instanceof pe){const o=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw i.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ko(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof st)return function(a,u){return{mapValue:{fields:{[fh]:{stringValue:mh},[Si]:{arrayValue:{values:a.toArray().map(d=>{if(typeof d!="number")throw u.Sc("VectorValues must only contain numeric values.");return $o(u.serializer,d)})}}}}}}(r,i);throw i.Sc(`Unsupported field value: ${Lo(r)}`)}(n,e)}function _d(n,e){const t={};return ah(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jt(n,(r,i)=>{const o=os(i,e.mc(r));o!=null&&(t[r]=o)}),{mapValue:{fields:t}}}function yd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ae||n instanceof it||n instanceof He||n instanceof pe||n instanceof is||n instanceof st)}function pa(n,e,t){if(!yd(t)||!sh(t)){const r=Lo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function To(n,e,t){if((e=Ce(e))instanceof rs)return e._internalPath;if(typeof e=="string")return ma(n,e);throw Mi("Field path arguments must be of type string or ",n,!1,void 0,t)}const Fv=new RegExp("[~\\*/\\[\\]]");function ma(n,e,t){if(e.search(Fv)>=0)throw Mi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new rs(...e.split("."))._internalPath}catch{throw Mi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Mi(n,e,t,r,i){const o=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${i}`),h+=")"),new L(k.INVALID_ARGUMENT,u+n+h)}function Ed(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,t,r,i,o){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Uv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Td("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Uv extends vd{data(){return super.data()}}function Td(n,e){return typeof e=="string"?ma(n,e):e instanceof rs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bv{convertValue(e,t="none"){switch(Ft(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw j(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jt(e,(i,o)=>{r[i]=this.convertValue(o,t)}),r}convertVectorValue(e){var r,i,o;const t=(o=(i=(r=e.fields)==null?void 0:r[Si].arrayValue)==null?void 0:i.values)==null?void 0:o.map(a=>fe(a.doubleValue));return new st(t)}convertGeoPoint(e){return new it(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zi(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ir(e));default:return null}}convertTimestamp(e){const t=xt(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);te(zh(r),9688,{name:e});const i=new wr(r.get(1),r.get(3)),o=new U(r.popFirst(5));return i.isEqual(t)||ft(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ur{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zt extends vd{constructor(e,t,r,i,o,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Td("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new L(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Zt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Zt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Zt._jsonSchema={type:ge("string",Zt._jsonSchemaVersion),bundleSource:ge("string","DocumentSnapshot"),bundleName:ge("string"),bundle:ge("string")};class mi extends Zt{data(e={}){return super.data(e)}}class en{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ur(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new mi(this._firestore,this._userDataWriter,r.key,r,new ur(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new L(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,o){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const h=new mi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ur(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new mi(i._firestore,i._userDataWriter,u.doc.key,u.doc,new ur(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:qv(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new L(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=en._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach(o=>{o._document!==null&&(t.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return j(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(n){n=je(n,pe);const e=je(n.firestore,mt);return Cv(ns(e),n._key).then(t=>Ad(e,n,t))}en._jsonSchemaVersion="firestore/querySnapshot/1.0",en._jsonSchema={type:ge("string",en._jsonSchemaVersion),bundleSource:ge("string","QuerySnapshot"),bundleName:ge("string"),bundle:ge("string")};class ga extends Bv{constructor(e){super(),this.firestore=e}convertBytes(e){return new He(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pe(this.firestore,null,t)}}function nT(n){n=je(n,Fr);const e=je(n.firestore,mt),t=ns(e),r=new ga(e);return Id(n._query),bv(t,n._query).then(i=>new en(e,r,n,i))}function rT(n,e,t){n=je(n,pe);const r=je(n.firestore,mt),i=wd(n.converter,e,t);return as(r,[gd(da(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,We.none())])}function iT(n,e,t,...r){n=je(n,pe);const i=je(n.firestore,mt),o=da(i);let a;return a=typeof(e=Ce(e))=="string"||e instanceof rs?Lv(o,"updateDoc",n._key,e,t,r):xv(o,"updateDoc",n._key,e),as(i,[a.toMutation(n._key,We.exists(!0))])}function sT(n){return as(je(n.firestore,mt),[new zo(n._key,We.none())])}function oT(n,e){const t=je(n.firestore,mt),r=kv(n),i=wd(n.converter,e);return as(t,[gd(da(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,We.exists(!1))]).then(()=>r)}function aT(n,...e){var h,d,m;n=Ce(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Ju(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(Ju(e[r])){const E=e[r];e[r]=(h=E.next)==null?void 0:h.bind(E),e[r+1]=(d=E.error)==null?void 0:d.bind(E),e[r+2]=(m=E.complete)==null?void 0:m.bind(E)}let o,a,u;if(n instanceof pe)a=je(n.firestore,mt),u=Wi(n._key.path),o={next:E=>{e[r]&&e[r](Ad(a,n,E))},error:e[r+1],complete:e[r+2]};else{const E=je(n,Fr);a=je(E.firestore,mt),u=E._query;const I=new ga(a);o={next:S=>{e[r]&&e[r](new en(a,I,E,S))},error:e[r+1],complete:e[r+2]},Id(n._query)}return function(I,S,V,O){const P=new la(O),F=new aa(S,P,V);return I.asyncQueue.enqueueAndForget(async()=>ia(await Oi(I),F)),()=>{P.Nu(),I.asyncQueue.enqueueAndForget(async()=>sa(await Oi(I),F))}}(ns(a),u,i,o)}function as(n,e){return function(r,i){const o=new lt;return r.asyncQueue.enqueueAndForget(async()=>mv(await Sv(r),i,o)),o.promise}(ns(n),e)}function Ad(n,e,t){const r=t.docs.get(e._key),i=new ga(n);return new Zt(n,i,e._key,r,new ur(t.hasPendingWrites,t.fromCache),e.converter)}function cT(){return new fa("serverTimestamp")}(function(e,t=!0){(function(i){Mn=i})(Dn),In(new nn("firestore",(r,{instanceIdentifier:i,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new mt(new M_(r.getProvider("auth-internal")),new F_(a,r.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new L(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wr(d.options.projectId,m)}(a,i),a);return o={useFetchStreams:t,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Vt(tu,nu,e),Vt(tu,nu,"esm2020")})();const jv={apiKey:"AIzaSyBV4JTbrCuJKJEOwX5qzg4sfK8jefl7PeU",authDomain:"tianna--rosita.firebaseapp.com",projectId:"tianna--rosita",storageBucket:"tianna--rosita.firebasestorage.app",messagingSenderId:"200362079339",appId:"1:200362079339:web:a2fc86fe31b7fd7a122d2e",measurementId:"G-J16K36N17R"},Rd=um().length?So():pl(jv),uT=V_(Rd),lT=Vv(Rd);export{uT as A,Xv as B,Jv as Q,Qv as a,Wv as b,nl as c,eT as d,lT as e,oT as f,nT as g,Tf as h,If as i,Af as j,wf as k,bf as l,Pf as m,Qs as n,Mf as o,Gv as p,aT as q,Kv as r,cT as s,kv as t,Ef as u,tT as v,rT as w,sT as x,iT as y,Yv as z};
