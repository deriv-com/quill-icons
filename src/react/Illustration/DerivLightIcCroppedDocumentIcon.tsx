import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightIcCroppedDocumentIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 138 162'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g
      clipPath='url(#fe96966b596ad77866d296dc8874c762__a)'
      filter='url(#fe96966b596ad77866d296dc8874c762__b)'
    >
      <path
        fill='#fff'
        d='M131 2H7a4 4 0 0 0-4 4v148a4 4 0 0 0 4 4h124a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4'
      />
      <path
        fill='#FFAD3A'
        fillRule='evenodd'
        d='M19.348 19.505a4 4 0 0 0 1.36-3.005 4 4 0 0 0-1.36-3.005 4 4 0 1 1 0 6.01m0 0a4 4 0 1 1 0-6.01 4 4 0 0 0-1.36 3.005 4 4 0 0 0 1.36 3.005'
        clipRule='evenodd'
      />
      <path fill='#85ACB0' d='M10.708 11h116.584V9H10.708zm116.584 10.594H10.708v2h116.584z' />
      <path
        fill='#3F6FE5'
        d='M14.43 28.51v2.48q0 .24-.08.44a.9.9 0 0 1-.225.335q-.15.135-.365.215-.21.075-.48.075-.26 0-.46-.07a1 1 0 0 1-.34-.2 1.1 1.1 0 0 1-.23-.31 1.4 1.4 0 0 1-.125-.4l.71-.14q.085.455.435.455a.4.4 0 0 0 .28-.105q.12-.105.12-.33V29.12h-1.06v-.61zm1.773 3.55q-.29 0-.52-.095a1.06 1.06 0 0 1-.385-.275 1.3 1.3 0 0 1-.24-.435 1.8 1.8 0 0 1-.085-.57q0-.315.085-.57a1.2 1.2 0 0 1 .24-.43q.16-.18.385-.275.23-.096.52-.095.29 0 .515.095.23.095.385.275.16.175.245.43t.085.57-.085.57-.245.435q-.155.18-.385.275-.225.095-.515.095m0-.585q.22 0 .34-.135t.12-.385v-.535q0-.25-.12-.385a.43.43 0 0 0-.34-.135.43.43 0 0 0-.34.135q-.12.135-.12.385v.535q0 .25.12.385t.34.135M17.96 28.3h.74v1.52h.03a.8.8 0 0 1 .245-.355q.176-.15.485-.15.406 0 .61.27.21.27.21.77V32h-.74v-1.585q0-.255-.08-.375-.08-.125-.285-.125a.6.6 0 0 0-.33.095.4.4 0 0 0-.105.125.33.33 0 0 0-.04.165V32h-.74zM20.94 32v-2.625h.74v.445h.03a.8.8 0 0 1 .245-.355q.174-.15.485-.15.405 0 .61.27.21.27.21.77V32h-.74v-1.585q0-.255-.08-.375-.081-.125-.285-.125a.6.6 0 0 0-.175.025.38.38 0 0 0-.26.195.33.33 0 0 0-.04.165V32zm6.415-.555h-.025a.66.66 0 0 1-.27.44q-.23.174-.625.175-.3 0-.56-.115a1.3 1.3 0 0 1-.455-.34 1.6 1.6 0 0 1-.305-.56 2.5 2.5 0 0 1-.11-.775q0-.44.115-.78t.32-.57q.21-.23.5-.35t.645-.12q.47 0 .81.205.34.2.535.605l-.62.355a.83.83 0 0 0-.25-.345q-.17-.145-.475-.145-.355 0-.565.205-.21.206-.21.645v.56q0 .435.21.645.21.205.565.205.14 0 .265-.03a.7.7 0 0 0 .22-.1.5.5 0 0 0 .145-.165.44.44 0 0 0 .055-.225v-.175h-.65v-.635h1.375V32h-.64zm2.404.615q-.29 0-.52-.095a1.06 1.06 0 0 1-.385-.275 1.3 1.3 0 0 1-.24-.435 1.8 1.8 0 0 1-.085-.57q0-.315.085-.57a1.2 1.2 0 0 1 .24-.43q.16-.18.385-.275.23-.096.52-.095.29 0 .515.095.23.095.385.275.16.175.245.43t.085.57-.085.57-.245.435q-.156.18-.385.275-.225.095-.515.095m0-.585q.22 0 .34-.135t.12-.385v-.535q0-.25-.12-.385a.43.43 0 0 0-.34-.135.43.43 0 0 0-.34.135q-.12.135-.12.385v.535q0 .25.12.385t.34.135m1.757.525v-2.625h.74v.445h.03a.8.8 0 0 1 .245-.355q.175-.15.485-.15.405 0 .61.27.21.27.21.77V32h-.74v-1.585q0-.255-.08-.375-.08-.125-.285-.125a.6.6 0 0 0-.33.095.4.4 0 0 0-.105.125.33.33 0 0 0-.04.165V32zm2.828 0v-.585l1.305-1.465h-1.26v-.575h2.12v.58l-1.31 1.47h1.345V32zm4.678 0a.48.48 0 0 1-.335-.125.6.6 0 0 1-.165-.335h-.03q-.06.255-.265.39a.92.92 0 0 1-.505.13q-.395 0-.605-.21a.75.75 0 0 1-.21-.555q0-.415.3-.615.306-.205.825-.205h.415v-.165a.43.43 0 0 0-.1-.3q-.1-.115-.335-.115a.6.6 0 0 0-.35.095 1 1 0 0 0-.215.215l-.44-.39q.16-.236.4-.365.246-.135.66-.135.561 0 .84.245.28.245.28.715v1.15h.245V32zm-1.025-.455a.6.6 0 0 0 .315-.08q.135-.08.135-.26v-.31h-.36q-.435 0-.435.295v.075q0 .144.09.215a.43.43 0 0 0 .255.065m2.667.455q-.38 0-.56-.185-.175-.185-.175-.535V28.3h.74v3.125h.33V32zm1.874.06q-.3 0-.535-.095a1.2 1.2 0 0 1-.4-.275 1.2 1.2 0 0 1-.245-.435q-.08-.255-.08-.57 0-.31.08-.56.08-.255.235-.435a1.05 1.05 0 0 1 .39-.275q.23-.1.525-.1.324 0 .555.11.234.11.38.295.15.185.215.43.07.24.07.505v.22h-1.685v.04q0 .26.14.415.14.15.44.15.23 0 .375-.09.144-.096.27-.225l.37.46q-.175.205-.46.32-.28.115-.64.115m-.015-2.2q-.226 0-.355.15a.58.58 0 0 0-.125.39v.04h.92v-.045a.62.62 0 0 0-.11-.385q-.105-.15-.33-.15M44.075 32v-.585l1.305-1.465h-1.26v-.575h2.12v.58l-1.31 1.47h1.345V32zM12.44 40v-.37h.975v-2.81h-.035l-.88.82-.245-.265.925-.865h.655v3.12h.9V40zm5.048-3.12h-1.53l-.1 1.33h.035q.125-.175.28-.28.16-.105.435-.105.225 0 .415.075t.33.215q.14.135.215.335.08.2.08.455t-.08.47a1.02 1.02 0 0 1-.605.6 1.3 1.3 0 0 1-.49.085q-.22 0-.39-.05a1.1 1.1 0 0 1-.295-.135 1.3 1.3 0 0 1-.23-.19 2 2 0 0 1-.175-.22l.315-.24q.064.105.135.19.075.085.16.145.09.06.205.095.115.03.275.03.36 0 .545-.19t.185-.535v-.05q0-.345-.185-.535t-.545-.19q-.24 0-.38.09-.135.085-.245.205l-.355-.05.125-1.92h1.87zm4.34 1.54h-1.765V40h-.42v-3.49h.42v1.54h1.765v-1.54h.42V40h-.42zM25.013 40q-.225 0-.325-.12a.6.6 0 0 1-.12-.3h-.025a.67.67 0 0 1-.28.36.87.87 0 0 1-.465.12q-.41 0-.64-.21-.225-.21-.225-.57 0-.365.265-.56.27-.195.835-.195h.51v-.255q0-.275-.15-.42t-.46-.145a.7.7 0 0 0-.395.105.9.9 0 0 0-.26.28l-.24-.225a.9.9 0 0 1 .335-.355q.23-.15.58-.15.47 0 .73.23t.26.64v1.42h.295V40zm-1.15-.28q.15 0 .275-.035a.7.7 0 0 0 .215-.1.5.5 0 0 0 .14-.15.36.36 0 0 0 .05-.185v-.425h-.53q-.346 0-.505.1a.32.32 0 0 0-.155.29v.105q0 .19.135.295a.6.6 0 0 0 .375.105m1.946.28v-2.58h.4v.475h.025a.8.8 0 0 1 .25-.33q.18-.145.495-.145h.155v.4h-.235q-.326 0-.51.125-.18.12-.18.305V40zm1.836 0v-2.58h.4v.42h.02q.045-.1.1-.185a.7.7 0 0 1 .14-.155.76.76 0 0 1 .455-.14q.255 0 .47.125.215.12.32.4h.01a.8.8 0 0 1 .26-.365q.195-.16.525-.16.395 0 .615.26.225.255.225.725V40h-.4v-1.585q0-.345-.135-.52-.136-.175-.43-.175a.9.9 0 0 0-.23.03.6.6 0 0 0-.19.09.44.44 0 0 0-.185.37V40h-.4v-1.585q0-.345-.135-.52t-.42-.175a.9.9 0 0 0-.23.03.6.6 0 0 0-.195.09.5.5 0 0 0-.14.155.44.44 0 0 0-.05.215V40zm5.34.06q-.26 0-.475-.095a1.1 1.1 0 0 1-.37-.27q-.15-.18-.235-.425a1.7 1.7 0 0 1-.085-.56q0-.305.085-.555t.235-.425q.155-.18.37-.275t.475-.095.47.095q.215.096.37.275.154.176.24.425.084.25.085.555 0 .31-.085.56a1.3 1.3 0 0 1-.24.425 1.1 1.1 0 0 1-.37.27q-.21.095-.47.095m0-.355a.73.73 0 0 0 .53-.2q.204-.2.205-.61v-.37q0-.41-.205-.61a.73.73 0 0 0-.53-.2.73.73 0 0 0-.53.2q-.205.2-.205.61v.37q0 .41.205.61t.53.2m1.823.295v-2.58h.4v.42h.02a.86.86 0 0 1 .265-.35.76.76 0 0 1 .465-.13q.399 0 .63.26.234.255.235.725V40h-.4v-1.585q0-.695-.585-.695-.12 0-.235.03a.7.7 0 0 0-.2.09.5.5 0 0 0-.145.155.44.44 0 0 0-.05.215V40zm4.392-2.58h.395L38.44 40.6q-.045.115-.09.19a.4.4 0 0 1-.11.125.4.4 0 0 1-.165.065q-.094.02-.235.02h-.205v-.35h.405l.195-.55-.965-2.68h.4l.62 1.755.12.42h.025l.14-.42zm3.107 2.64q-.425 0-.725-.16-.3-.165-.51-.45l.31-.26q.185.244.41.375.225.125.53.125.375 0 .57-.18.2-.18.2-.48 0-.25-.15-.385t-.495-.215l-.285-.065q-.48-.11-.735-.33-.25-.225-.25-.63 0-.23.085-.41a.8.8 0 0 1 .235-.3q.155-.12.365-.18.215-.065.47-.065.396 0 .675.145.285.146.48.425l-.315.23a1.1 1.1 0 0 0-.35-.315 1.03 1.03 0 0 0-.51-.115q-.335 0-.53.145-.19.14-.19.425 0 .25.16.38.165.125.495.2l.285.065q.516.116.745.35.23.235.23.625 0 .24-.085.435a.9.9 0 0 1-.235.33 1.1 1.1 0 0 1-.38.21q-.22.075-.5.075m2.456-.06q-.21 0-.32-.115a.45.45 0 0 1-.105-.31V37.77h-.425v-.35h.24q.13 0 .175-.05.05-.054.05-.185v-.48h.36v.715h.565v.35h-.566v1.88h.526V40zm1.437.06q-.16 0-.235-.08a.3.3 0 0 1-.07-.21v-.065q0-.13.07-.21.075-.08.235-.08t.23.08q.075.08.075.21v.065a.3.3 0 0 1-.075.21q-.07.08-.23.08M13.695 48.06q-.665 0-1.035-.45-.37-.455-.37-1.335t.37-1.35q.37-.475 1.035-.475.44 0 .735.2.3.2.465.565l-.34.205a.95.95 0 0 0-.32-.43.86.86 0 0 0-.54-.165.9.9 0 0 0-.405.085.85.85 0 0 0-.3.245q-.12.155-.185.375a1.7 1.7 0 0 0-.065.485v.52q0 .54.25.845t.705.305q.335 0 .56-.17.225-.175.33-.46l.335.21q-.165.369-.475.585-.31.21-.75.21m2.81 0q-.26 0-.474-.095a1.1 1.1 0 0 1-.37-.27q-.15-.18-.236-.425a1.7 1.7 0 0 1-.085-.56q0-.305.085-.555t.236-.425q.154-.18.37-.275.214-.095.475-.095.26 0 .47.095.214.095.37.275.154.175.24.425.084.25.085.555 0 .31-.085.56a1.3 1.3 0 0 1-.24.425 1.1 1.1 0 0 1-.37.27q-.21.095-.47.095m0-.355a.73.73 0 0 0 .53-.2q.206-.2.206-.61v-.37q0-.41-.206-.61a.73.73 0 0 0-.53-.2.73.73 0 0 0-.53.2q-.204.2-.204.61v.37q0 .41.204.61.206.2.53.2m2.598.355a1.24 1.24 0 0 1-.605-.135 1.4 1.4 0 0 1-.415-.37l.285-.23q.15.19.335.295a.9.9 0 0 0 .43.1q.255 0 .395-.11a.37.37 0 0 0 .145-.31q0-.15-.1-.255-.095-.11-.35-.15l-.205-.03a2 2 0 0 1-.33-.075 1 1 0 0 1-.265-.14.7.7 0 0 1-.175-.22.7.7 0 0 1-.06-.31.7.7 0 0 1 .07-.33.7.7 0 0 1 .19-.24.8.8 0 0 1 .295-.14 1.3 1.3 0 0 1 .365-.05q.315 0 .525.11.216.11.375.305l-.265.24a.8.8 0 0 0-.25-.215.8.8 0 0 0-.415-.1q-.25 0-.38.11a.36.36 0 0 0-.125.29q0 .19.125.275.13.084.37.125l.2.03q.43.065.61.25.18.18.18.475 0 .375-.255.59t-.7.215m1.662-.06v-2.58h.4v.42h.02q.045-.1.1-.185a.7.7 0 0 1 .14-.155.76.76 0 0 1 .455-.14q.255 0 .47.125.215.12.32.4h.01a.8.8 0 0 1 .26-.365q.195-.16.525-.16.395 0 .615.26.225.255.225.725V48h-.4v-1.585q0-.346-.135-.52t-.43-.175a.9.9 0 0 0-.23.03.6.6 0 0 0-.19.09.44.44 0 0 0-.185.37V48h-.4v-1.585q0-.346-.135-.52t-.42-.175a.9.9 0 0 0-.23.03.6.6 0 0 0-.195.09.5.5 0 0 0-.14.155.44.44 0 0 0-.05.215V48zm5.34.06q-.26 0-.475-.095a1.1 1.1 0 0 1-.37-.27q-.15-.18-.235-.425a1.7 1.7 0 0 1-.085-.56q0-.305.085-.555t.235-.425q.155-.18.37-.275t.475-.095.47.095q.215.095.37.275.155.175.24.425t.085.555q0 .31-.085.56a1.3 1.3 0 0 1-.24.425 1.1 1.1 0 0 1-.37.27q-.21.095-.47.095m0-.355a.73.73 0 0 0 .53-.2q.205-.2.205-.61v-.37q0-.41-.205-.61a.73.73 0 0 0-.53-.2.73.73 0 0 0-.53.2q-.205.2-.205.61v.37q0 .41.205.61t.53.2m1.823-2.285h.4v.42h.02a.72.72 0 0 1 .29-.36.87.87 0 0 1 .465-.12 1 1 0 0 1 .435.095q.195.095.33.27.14.175.21.425.075.25.075.56t-.075.56a1.2 1.2 0 0 1-.21.425.9.9 0 0 1-.33.27 1 1 0 0 1-.435.095q-.525 0-.755-.48h-.02V49h-.4zm1.065 2.28q.34 0 .535-.21a.8.8 0 0 0 .195-.56v-.44q0-.345-.195-.555-.195-.215-.535-.215a.85.85 0 0 0-.47.14.5.5 0 0 0-.145.16.4.4 0 0 0-.05.195v.96q0 .124.05.225a.6.6 0 0 0 .145.165.7.7 0 0 0 .21.1q.125.035.26.035m2.81.36q-.26 0-.475-.095a1.1 1.1 0 0 1-.37-.27q-.15-.18-.235-.425a1.7 1.7 0 0 1-.085-.56q0-.305.085-.555t.235-.425q.156-.18.37-.275.216-.095.475-.095.26 0 .47.095.216.095.37.275.156.175.24.425.085.25.085.555 0 .31-.085.56a1.3 1.3 0 0 1-.24.425 1.1 1.1 0 0 1-.37.27q-.21.095-.47.095m0-.355a.73.73 0 0 0 .53-.2q.205-.2.205-.61v-.37q0-.41-.205-.61a.73.73 0 0 0-.53-.2.73.73 0 0 0-.53.2q-.204.2-.205.61v.37q0 .41.205.61.206.2.53.2m2.248.295q-.21 0-.32-.115a.44.44 0 0 1-.105-.3V44.3h.4v3.35h.38V48zm1.137-3.185q-.13 0-.19-.06a.25.25 0 0 1-.054-.165v-.065q0-.1.054-.16.06-.066.19-.065.13 0 .185.065.06.06.06.16v.065q0 .099-.06.165-.055.06-.184.06m-.2.605h.4V48h-.4zm2.026 2.64a1.24 1.24 0 0 1-.606-.135 1.4 1.4 0 0 1-.415-.37l.285-.23q.15.19.336.295a.9.9 0 0 0 .43.1q.255 0 .395-.11a.37.37 0 0 0 .145-.31q0-.15-.1-.255-.095-.11-.35-.15l-.206-.03a2 2 0 0 1-.33-.075 1 1 0 0 1-.264-.14.7.7 0 0 1-.176-.22.7.7 0 0 1-.06-.31q0-.19.07-.33a.7.7 0 0 1 .19-.24.8.8 0 0 1 .296-.14q.17-.05.364-.05.316 0 .526.11.215.11.375.305l-.265.24a.8.8 0 0 0-.25-.215.8.8 0 0 0-.416-.1q-.25 0-.38.11a.36.36 0 0 0-.124.29q0 .19.124.275.13.084.37.125l.2.03q.43.065.61.25.18.18.18.475 0 .375-.255.59t-.7.215m1.892-.645q.16 0 .23.085.075.08.075.21v.07q0 .204-.12.45-.12.25-.335.435h-.335q.15-.16.24-.305a.9.9 0 0 0 .135-.315.25.25 0 0 1-.15-.095.3.3 0 0 1-.045-.17v-.07q0-.13.07-.21.075-.085.235-.085m4.589.075h-.015a.7.7 0 0 1-.32.41q-.25.16-.65.16a1.5 1.5 0 0 1-.59-.115 1.3 1.3 0 0 1-.456-.345 1.7 1.7 0 0 1-.3-.565 2.7 2.7 0 0 1-.105-.78q0-.435.105-.77.105-.34.3-.565.195-.23.47-.35.276-.12.61-.12.471 0 .786.21t.485.555l-.346.21a1 1 0 0 0-.36-.44 1 1 0 0 0-.565-.16 1.02 1.02 0 0 0-.75.315q-.135.15-.21.36a1.4 1.4 0 0 0-.075.47v.565q0 .26.075.475.075.21.21.36.14.15.34.235.201.08.45.08.18 0 .34-.045a.9.9 0 0 0 .285-.145.66.66 0 0 0 .265-.575v-.345h-.77v-.37h1.18V48h-.39zm1.601.51q-.21 0-.32-.115a.44.44 0 0 1-.105-.3V44.3h.4v3.35h.38V48zm1.912.06q-.26 0-.475-.095a1.1 1.1 0 0 1-.37-.27q-.15-.18-.235-.425a1.7 1.7 0 0 1-.085-.56q0-.305.085-.555t.235-.425q.156-.18.37-.275.216-.095.475-.095.26 0 .47.095.216.095.37.275.156.175.24.425.085.25.085.555 0 .31-.085.56a1.3 1.3 0 0 1-.24.425 1.1 1.1 0 0 1-.37.27q-.21.095-.47.095m0-.355a.73.73 0 0 0 .53-.2q.205-.2.205-.61v-.37q0-.41-.205-.61a.73.73 0 0 0-.53-.2.73.73 0 0 0-.53.2q-.205.2-.205.61v.37q0 .41.205.61.206.2.53.2m1.823-3.405h.4v1.54h.02a.72.72 0 0 1 .29-.36.87.87 0 0 1 .465-.12 1 1 0 0 1 .435.095q.195.095.33.27.141.175.21.425.075.25.075.56t-.075.56a1.2 1.2 0 0 1-.21.425.9.9 0 0 1-.33.27 1 1 0 0 1-.435.095q-.524 0-.755-.48h-.02V48h-.4zm1.065 3.4q.34 0 .535-.21a.8.8 0 0 0 .195-.56v-.44q0-.345-.195-.555-.195-.215-.535-.215a.85.85 0 0 0-.47.14.5.5 0 0 0-.145.16.4.4 0 0 0-.05.195v.96q0 .124.05.225a.6.6 0 0 0 .145.165.7.7 0 0 0 .21.1 1 1 0 0 0 .26.035m3.71.3q-.225 0-.324-.12a.6.6 0 0 1-.12-.3h-.025a.67.67 0 0 1-.28.36.87.87 0 0 1-.465.12q-.41 0-.64-.21-.225-.21-.225-.57 0-.365.265-.56.27-.195.835-.195h.51v-.255q0-.276-.15-.42-.15-.145-.46-.145a.7.7 0 0 0-.395.105.9.9 0 0 0-.26.28l-.24-.225a.9.9 0 0 1 .335-.355q.23-.15.58-.15.47 0 .73.23t.26.64v1.42h.295V48zm-1.15-.28q.15 0 .276-.035a.7.7 0 0 0 .215-.1.5.5 0 0 0 .14-.15.36.36 0 0 0 .05-.185v-.425h-.53q-.346 0-.505.1a.32.32 0 0 0-.155.29v.105q0 .19.135.295a.6.6 0 0 0 .375.105m2.371.28q-.21 0-.32-.115a.44.44 0 0 1-.104-.3V44.3h.4v3.35h.38V48zm3.14.06q-.426 0-.725-.16-.3-.165-.51-.45l.31-.26q.185.244.41.375.224.125.53.125.375 0 .57-.18.2-.18.2-.48 0-.25-.15-.385t-.495-.215l-.285-.065q-.48-.111-.736-.33-.25-.225-.25-.63 0-.23.086-.41a.8.8 0 0 1 .235-.3q.155-.12.365-.18.215-.066.47-.065.394 0 .675.145.285.144.48.425l-.316.23a1.1 1.1 0 0 0-.35-.315 1.03 1.03 0 0 0-.51-.115q-.335 0-.53.145-.19.14-.19.425 0 .25.16.38.166.125.495.2l.285.065q.516.115.745.35.23.235.23.625 0 .24-.084.435a.9.9 0 0 1-.236.33 1.1 1.1 0 0 1-.38.21q-.22.075-.5.075m2.455-.06q-.21 0-.32-.115a.45.45 0 0 1-.105-.31V45.77h-.425v-.35h.24q.13 0 .175-.05.05-.055.05-.185v-.48h.36v.715h.565v.35h-.565v1.88h.525V48zm3.058 0q-.225 0-.325-.12a.6.6 0 0 1-.12-.3h-.025a.67.67 0 0 1-.28.36.87.87 0 0 1-.465.12q-.41 0-.64-.21-.225-.21-.225-.57 0-.365.265-.56.27-.195.835-.195h.51v-.255q0-.276-.15-.42-.15-.145-.46-.145a.7.7 0 0 0-.395.105.9.9 0 0 0-.26.28l-.24-.225a.9.9 0 0 1 .335-.355q.23-.15.58-.15.47 0 .73.23t.26.64v1.42h.295V48zm-1.15-.28q.15 0 .275-.035a.7.7 0 0 0 .215-.1.5.5 0 0 0 .14-.15.36.36 0 0 0 .05-.185v-.425h-.53q-.346 0-.505.1a.32.32 0 0 0-.155.29v.105q0 .19.135.295a.6.6 0 0 0 .375.105m2.516.28q-.21 0-.32-.115a.45.45 0 0 1-.105-.31V45.77h-.425v-.35h.24q.13 0 .175-.05.05-.055.05-.185v-.48h.36v.715h.565v.35h-.565v1.88h.525V48zm2.133.06q-.266 0-.48-.095a1.1 1.1 0 0 1-.365-.27q-.15-.18-.235-.425a1.8 1.8 0 0 1-.08-.56q0-.305.08-.555.085-.25.235-.425.155-.18.365-.275.214-.095.48-.095.26 0 .465.095.205.094.35.265.145.165.22.395.08.23.08.505v.19h-1.855v.12q0 .165.05.31a.8.8 0 0 0 .15.245q.1.105.24.165.145.06.325.06a.75.75 0 0 0 .71-.445l.285.205q-.124.265-.39.43-.266.16-.63.16m0-2.365a.73.73 0 0 0-.535.22.84.84 0 0 0-.205.56v.035h1.425v-.055q0-.345-.19-.55a.63.63 0 0 0-.495-.21M13.305 53.99q.355 0 .53-.16.18-.165.18-.42v-.035q0-.275-.175-.41a.7.7 0 0 0-.45-.14q-.27 0-.44.12a.9.9 0 0 0-.28.315l-.31-.24a1.4 1.4 0 0 1 .155-.205 1.1 1.1 0 0 1 .51-.315q.165-.05.375-.05.22 0 .415.06.195.055.335.17a.807.807 0 0 1 .31.65.8.8 0 0 1-.055.305.7.7 0 0 1-.14.235.987.987 0 0 1-.475.275v.02q.14.03.27.1a.8.8 0 0 1 .235.175.7.7 0 0 1 .165.26q.065.15.065.345 0 .225-.085.415a.94.94 0 0 1-.24.32 1.2 1.2 0 0 1-.375.205q-.22.075-.485.075a1.5 1.5 0 0 1-.4-.05 1.2 1.2 0 0 1-.31-.135 1.4 1.4 0 0 1-.42-.41l.315-.24q.065.105.14.19a.84.84 0 0 0 .39.24q.12.03.28.03.37 0 .56-.165.19-.17.19-.48V55q0-.31-.19-.475-.19-.17-.56-.17h-.41v-.365zm2.998 0q.355 0 .53-.16.18-.165.18-.42v-.035q0-.275-.175-.41a.7.7 0 0 0-.45-.14q-.27 0-.44.12a.9.9 0 0 0-.28.315l-.31-.24q.065-.105.155-.205a1.1 1.1 0 0 1 .51-.315q.165-.05.375-.05.22 0 .415.06.195.055.335.17a.807.807 0 0 1 .31.65.8.8 0 0 1-.055.305.7.7 0 0 1-.14.235.986.986 0 0 1-.475.275v.02q.14.03.27.1a.8.8 0 0 1 .235.175.7.7 0 0 1 .165.26.9.9 0 0 1 .065.345q0 .225-.085.415a.9.9 0 0 1-.24.32 1.2 1.2 0 0 1-.375.205q-.22.075-.485.075a1.5 1.5 0 0 1-.4-.05 1.2 1.2 0 0 1-.31-.135 1.4 1.4 0 0 1-.42-.41l.315-.24q.065.105.14.19a.841.841 0 0 0 .39.24q.12.03.28.03.37 0 .56-.165.19-.17.19-.48V55q0-.31-.19-.475-.19-.17-.56-.17h-.41v-.365zm3.193 2.07q-.626 0-.915-.475-.285-.475-.285-1.33t.285-1.33q.29-.474.915-.475.625 0 .91.475.29.475.29 1.33t-.29 1.33q-.285.475-.91.475m0-.365a.7.7 0 0 0 .35-.085.65.65 0 0 0 .235-.24q.09-.155.13-.365.045-.21.045-.465v-.57q0-.255-.045-.465a1.2 1.2 0 0 0-.13-.365.65.65 0 0 0-.235-.24.7.7 0 0 0-.35-.085.7.7 0 0 0-.35.085.65.65 0 0 0-.235.24 1.2 1.2 0 0 0-.135.365 2.5 2.5 0 0 0-.04.465v.57q0 .255.04.465.045.21.135.365a.65.65 0 0 0 .235.24.7.7 0 0 0 .35.085m1.938.305v-.37h.975v-2.81h-.035l-.88.82-.245-.265.925-.865h.655v3.12h.9V56zm4.058.06q-.625 0-.915-.475-.285-.475-.285-1.33t.285-1.33q.29-.474.915-.475.625 0 .91.475.29.475.29 1.33t-.29 1.33q-.285.475-.91.475m0-.365a.7.7 0 0 0 .35-.085.65.65 0 0 0 .235-.24q.09-.155.13-.365.045-.21.045-.465v-.57q0-.255-.045-.465a1.2 1.2 0 0 0-.13-.365.65.65 0 0 0-.235-.24.7.7 0 0 0-.35-.085.7.7 0 0 0-.35.085.65.65 0 0 0-.235.24 1.2 1.2 0 0 0-.135.365 2.5 2.5 0 0 0-.04.465v.57q0 .255.04.465.045.21.135.365a.65.65 0 0 0 .235.24.7.7 0 0 0 .35.085'
      />
      <g fill='#2A3052' opacity={0.16}>
        <path d='M98.75 31.594v-.605h.45v-2.28h-.45v-.605h1.66v.605h-.45v2.28h.45v.605zm3.119.06q-.38 0-.64-.12a1.5 1.5 0 0 1-.465-.35l.435-.44q.14.155.31.245t.385.09q.22 0 .305-.065a.23.23 0 0 0 .085-.185q0-.186-.265-.22l-.285-.035q-.885-.111-.885-.81 0-.19.07-.345a.8.8 0 0 1 .205-.27.9.9 0 0 1 .32-.175q.19-.066.425-.065.204 0 .36.03.16.024.28.08a1 1 0 0 1 .225.13q.105.075.205.17l-.425.435a1 1 0 0 0-.285-.195.7.7 0 0 0-.32-.075q-.19 0-.27.06a.19.19 0 0 0-.08.16q0 .105.055.165.06.054.22.08l.295.04q.864.115.865.79a.78.78 0 0 1-.31.63 1.1 1.1 0 0 1-.355.18q-.205.065-.46.065m2.485 0q-.38 0-.64-.12a1.5 1.5 0 0 1-.465-.35l.435-.44q.14.155.31.245a.8.8 0 0 0 .385.09q.22 0 .305-.065a.23.23 0 0 0 .085-.185q0-.186-.265-.22l-.285-.035q-.885-.111-.885-.81 0-.19.07-.345a.8.8 0 0 1 .205-.27.9.9 0 0 1 .32-.175q.19-.066.425-.065.206 0 .36.03.16.024.28.08a1 1 0 0 1 .225.13q.105.075.205.17l-.425.435a.9.9 0 0 0-.285-.195.7.7 0 0 0-.32-.075q-.19 0-.27.06a.19.19 0 0 0-.08.16q0 .105.055.165.06.054.22.08l.295.04q.865.115.865.79a.78.78 0 0 1-.31.63 1.1 1.1 0 0 1-.355.18q-.205.065-.46.065m3.18-.5h-.025a1 1 0 0 1-.095.19.6.6 0 0 1-.145.16.7.7 0 0 1-.215.11.9.9 0 0 1-.28.04q-.405 0-.615-.265-.205-.27-.205-.77v-1.65h.74v1.585q0 .24.085.37.084.13.29.13a.6.6 0 0 0 .32-.095.4.4 0 0 0 .105-.12.33.33 0 0 0 .04-.165v-1.705h.74v2.625h-.74zm2.523.5q-.3 0-.535-.095a1.2 1.2 0 0 1-.4-.275 1.25 1.25 0 0 1-.245-.435 2 2 0 0 1-.08-.57q0-.31.08-.56a1.2 1.2 0 0 1 .235-.435q.16-.18.39-.275.231-.1.525-.1.326 0 .555.11.236.11.38.295.15.184.215.43.07.24.07.505v.22h-1.685v.04q0 .26.14.415.14.15.44.15.231 0 .375-.09.145-.096.27-.225l.37.46q-.174.204-.46.32a1.7 1.7 0 0 1-.64.115m-.015-2.2q-.225 0-.355.15a.58.58 0 0 0-.125.39v.04h.92v-.045a.62.62 0 0 0-.11-.385q-.105-.15-.33-.15m4.519 1.7h-.025a.67.67 0 0 1-.465.46.7.7 0 0 1-.24.04q-.5 0-.755-.35-.255-.356-.255-1.025 0-.67.255-1.02t.755-.35q.255 0 .45.14a.6.6 0 0 1 .255.36h.025v-1.515h.74v3.7h-.74zm-.485-.1q.21 0 .345-.1a.34.34 0 0 0 .14-.285v-.775a.32.32 0 0 0-.14-.28.55.55 0 0 0-.345-.105.46.46 0 0 0-.35.15.56.56 0 0 0-.135.395v.455q0 .25.135.4.14.145.35.145m3.857.54a.48.48 0 0 1-.335-.125.6.6 0 0 1-.165-.335h-.03q-.06.255-.265.39a.92.92 0 0 1-.505.13q-.395 0-.605-.21a.75.75 0 0 1-.21-.555q0-.415.3-.615.306-.205.825-.205h.415v-.165a.43.43 0 0 0-.1-.3q-.1-.115-.335-.115a.6.6 0 0 0-.35.095 1 1 0 0 0-.215.215l-.44-.39q.16-.236.4-.365.246-.135.66-.135.561 0 .84.245.28.244.28.715v1.15h.245v.575zm-1.025-.455a.6.6 0 0 0 .315-.08q.135-.08.135-.26v-.31h-.36q-.435 0-.435.295v.075q0 .144.09.215a.43.43 0 0 0 .255.065m2.823.455q-.386 0-.585-.195-.195-.195-.195-.57v-1.285h-.37v-.575h.185q.15 0 .205-.07a.35.35 0 0 0 .055-.21v-.43h.665v.71h.52v.575h-.52v1.475h.48v.575zm2.069.06q-.3 0-.535-.095a1.2 1.2 0 0 1-.4-.275 1.25 1.25 0 0 1-.245-.435 2 2 0 0 1-.08-.57q0-.31.08-.56a1.2 1.2 0 0 1 .235-.435q.16-.18.39-.275.231-.1.525-.1.326 0 .555.11.236.11.38.295.15.184.215.43.07.24.07.505v.22h-1.685v.04q0 .26.14.415.14.15.44.15.231 0 .375-.09.146-.096.27-.225l.37.46q-.174.204-.46.32a1.7 1.7 0 0 1-.64.115m-.015-2.2q-.225 0-.355.15a.58.58 0 0 0-.125.39v.04h.92v-.045a.62.62 0 0 0-.11-.385q-.105-.15-.33-.15m3.39 2.195q-.225 0-.335-.11a.41.41 0 0 1-.105-.29v-.1q0-.176.105-.285.11-.115.335-.115t.33.115q.11.11.11.285v.1a.4.4 0 0 1-.11.29q-.105.11-.33.11m0-1.835q-.225 0-.335-.11a.41.41 0 0 1-.105-.29v-.1q0-.175.105-.285.11-.115.335-.115t.33.115q.11.11.11.285v.1a.4.4 0 0 1-.11.29q-.105.11-.33.11M101.685 36.654h-.025l-.295.584-.835 1.52-.835-1.52-.295-.584h-.025v2.94h-.41v-3.49h.56l1 1.88h.025l1.005-1.88h.54v3.49h-.41zm3.173 2.94q-.225 0-.325-.12a.6.6 0 0 1-.12-.3h-.025a.67.67 0 0 1-.28.36.87.87 0 0 1-.465.12q-.41 0-.64-.21-.225-.21-.225-.57 0-.366.265-.56.27-.196.835-.196h.51v-.255q0-.275-.15-.42t-.46-.145a.7.7 0 0 0-.395.105.9.9 0 0 0-.26.28l-.24-.224a.9.9 0 0 1 .335-.356q.23-.15.58-.15.47 0 .73.23t.26.64v1.42h.295v.35zm-1.15-.28q.15 0 .275-.035a.7.7 0 0 0 .215-.1.5.5 0 0 0 .14-.15.36.36 0 0 0 .05-.186v-.425h-.53q-.346 0-.505.1a.32.32 0 0 0-.155.29v.105q0 .19.135.296a.6.6 0 0 0 .375.104m3.511-2.3h.395l-1.155 3.18q-.045.115-.09.19a.4.4 0 0 1-.11.125.4.4 0 0 1-.165.065q-.095.02-.235.02h-.205v-.35h.405l.195-.55-.965-2.68h.4l.62 1.755.12.42h.025l.14-.42zm2.967.57q.355 0 .53-.16.18-.165.18-.42v-.035q0-.276-.175-.41a.68.68 0 0 0-.45-.14q-.27 0-.44.12a.9.9 0 0 0-.28.314l-.31-.24q.065-.105.155-.205a1.1 1.1 0 0 1 .51-.315q.165-.05.375-.05.22 0 .415.06.195.056.335.17a.803.803 0 0 1 .31.65.8.8 0 0 1-.055.305.7.7 0 0 1-.14.236.991.991 0 0 1-.475.275v.02q.14.03.27.1.135.065.235.174a.7.7 0 0 1 .165.26q.065.15.065.346a1 1 0 0 1-.085.414.95.95 0 0 1-.24.32 1.2 1.2 0 0 1-.375.206q-.22.075-.485.075-.225 0-.4-.05a1.2 1.2 0 0 1-.31-.136 1.4 1.4 0 0 1-.42-.41l.315-.24q.065.106.14.19a.835.835 0 0 0 .39.24q.12.03.28.03.37 0 .56-.164.19-.171.19-.48v-.04q0-.31-.19-.476-.19-.17-.56-.17h-.41v-.364zm2.373 1.424q.16 0 .23.085.075.081.075.21v.07q0 .205-.12.45-.12.25-.335.436h-.335q.15-.16.24-.305a.9.9 0 0 0 .135-.315.25.25 0 0 1-.15-.096.3.3 0 0 1-.045-.17v-.07q0-.129.07-.21.075-.084.235-.085m4.529.586h-2.29v-.43l1.14-1.05q.245-.225.41-.475.165-.255.165-.51v-.06a.68.68 0 0 0-.16-.47q-.16-.18-.485-.18-.16 0-.28.045a.7.7 0 0 0-.21.125.8.8 0 0 0-.145.19 1 1 0 0 0-.09.23l-.375-.145q.05-.156.135-.3.09-.15.22-.266.135-.114.32-.184.19-.07.445-.07t.455.075.335.21.205.32q.075.185.075.41 0 .204-.06.38a1.5 1.5 0 0 1-.155.334 2 2 0 0 1-.245.305q-.14.15-.305.3l-.94.846h1.835zm1.833.06q-.626 0-.915-.476-.285-.474-.285-1.33 0-.855.285-1.33.29-.474.915-.474t.91.475q.29.474.29 1.33 0 .855-.29 1.33-.285.474-.91.475m0-.366a.7.7 0 0 0 .35-.084.65.65 0 0 0 .235-.24q.09-.155.13-.365.045-.21.045-.465v-.57q0-.255-.045-.465a1.2 1.2 0 0 0-.13-.365.65.65 0 0 0-.235-.24.7.7 0 0 0-.35-.086.7.7 0 0 0-.35.085.65.65 0 0 0-.235.24q-.09.156-.135.366-.04.21-.04.465v.57q0 .255.04.465.045.21.135.365t.235.24a.7.7 0 0 0 .35.084m4.163.306h-2.29v-.43l1.14-1.05q.245-.225.41-.475.165-.255.165-.51v-.06a.68.68 0 0 0-.16-.47q-.16-.18-.485-.18-.16 0-.28.045a.7.7 0 0 0-.21.125.8.8 0 0 0-.145.19 1 1 0 0 0-.09.23l-.375-.145q.05-.156.135-.3.09-.15.22-.266.135-.114.32-.184.19-.07.445-.07t.455.075.335.21.205.32q.075.185.075.41 0 .204-.06.38a1.5 1.5 0 0 1-.155.334 2 2 0 0 1-.245.305q-.14.15-.305.3l-.94.846h1.835zm1.638-2.01q.355 0 .53-.16.18-.165.18-.42v-.035q0-.276-.175-.41a.68.68 0 0 0-.45-.14q-.27 0-.44.12a.9.9 0 0 0-.28.314l-.31-.24q.065-.105.155-.205a1.1 1.1 0 0 1 .51-.315q.165-.05.375-.05.22 0 .415.06.195.056.335.17a.803.803 0 0 1 .31.65.8.8 0 0 1-.055.305.7.7 0 0 1-.14.236.991.991 0 0 1-.475.275v.02q.14.03.27.1.135.065.235.174a.7.7 0 0 1 .165.26q.065.15.065.346a1 1 0 0 1-.085.414.95.95 0 0 1-.24.32 1.2 1.2 0 0 1-.375.206q-.22.075-.485.075-.225 0-.4-.05a1.2 1.2 0 0 1-.31-.136 1.4 1.4 0 0 1-.42-.41l.315-.24q.065.106.14.19a.835.835 0 0 0 .39.24q.12.03.28.03.37 0 .56-.164.19-.171.19-.48v-.04q0-.31-.19-.476-.19-.17-.56-.17h-.41v-.364z' />
      </g>
      <g opacity={0.08}>
        <path fill='#377CFC' d='M94 61.594H44v6.781h50z' />
        <path stroke='#377CFC' strokeWidth={0.5} d='M13.5 72.125h111' />
        <path
          fill='#377CFC'
          d='M11.5 76.375h33v4h-33zM52.5 76.375h33v4h-33zM93.5 76.375h33v4h-33z'
        />
        <path stroke='#377CFC' strokeWidth={0.5} d='M13.5 84.125h111' />
        <path
          fill='#377CFC'
          d='M11.5 88.375h33v4h-33zM52.5 88.375h33v4h-33zM93.5 88.375h33v4h-33zM11.5 96.375h33v4h-33zM52.5 96.375h33v4h-33zM93.5 96.375h33v4h-33zM11.5 104.375h33v4h-33zM52.5 104.375h33v4h-33zM93.5 104.375h33v4h-33zM11.5 112.375h33v4h-33zM52.5 112.375h33v4h-33zM93.5 112.375h33v4h-33zM11.5 120.375h33v4h-33zM52.5 120.375h33v4h-33zM93.5 120.375h33v4h-33zM11.5 128.375h33v4h-33zM52.5 128.375h33v4h-33zM93.5 128.375h33v4h-33zM11.5 136.375h33v4h-33zM52.5 136.375h33v4h-33zM93.5 136.375h33v4h-33zM11.5 144.375h33v4h-33zM52.5 144.375h33v4h-33zM93.5 144.375h33v4h-33z'
        />
      </g>
      <path
        fill='#377CFC'
        fillRule='evenodd'
        d='M3 154a4 4 0 0 0 4 4h124a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v148m5-99.175a4 4 0 0 0 4 4h50.5a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4z'
        clipRule='evenodd'
        opacity={0.16}
      />
      <path stroke='#000' strokeDasharray='2 2' d='M66 6.375v50' />
      <path
        fill='#fff'
        stroke='#000'
        d='M9.5 2.875h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5ZM67.5 2.875h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5ZM9.5 56.875h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z'
      />
      <path stroke='#000' d='M10.5 58.875h53M8 7.375v49' />
      <path stroke='#000' strokeDasharray='2 2' d='M10.5 4.875h53' />
      <path
        fill='#fff'
        stroke='#000'
        d='M67.5 56.875h-3a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z'
      />
      <mask
        id='fe96966b596ad77866d296dc8874c762__c'
        width={15}
        height={15}
        x={62}
        y={33}
        maskUnits='userSpaceOnUse'
        style={{
          maskType: 'luminance',
        }}
      >
        <path fill='#fff' d='M76.5 47.375v-14h-14v14z' />
      </mask>
      <g mask='url(#fe96966b596ad77866d296dc8874c762__c)'>
        <path
          fill='#000'
          d='M68.916 47.369c.237-.023.468-.114.666-.264q.171-.129.302-.305a1.82 1.82 0 0 0 .338-1.136l-.006-.093a2 2 0 0 0-.173-.664l-.001-.003-.053-.102c-.35-.645-.491-1.123-.544-1.445.294.141.713.41 1.235.925l.084.08.002.002c.172.15.376.27.592.352l.086.03.003.001c.551.178 1.151.096 1.565-.215q.21-.157.342-.38a1.33 1.33 0 0 0 .17-.86 1.6 1.6 0 0 0-.35-.782 1.9 1.9 0 0 0-.385-.357 2.1 2.1 0 0 0-.465-.238c-.563-.198-1.186-.126-1.611.194a1.4 1.4 0 0 0-.293.3l-1.072-.462-.62-3.514-.005-.039c-.012-.079-.024-.161-.055-.244-.117-.307-.395-.484-.608-.578a1.4 1.4 0 0 0-.272-.092l-.213-.047a.11.11 0 0 0-.13.119l.48 3.828-1.353-.562v1.36l1.55.733.14 1.119q-.196.067-.365.194c-.405.304-.652.846-.643 1.413.01.651.336 1.244.848 1.545.25.148.539.214.814.187m2.21-4.448a.5.5 0 0 1 .11-.117c.186-.14.454-.149.643-.111.263.053.5.198.648.399.138.185.177.396.105.564a.45.45 0 0 1-.145.182c-.141.106-.365.153-.585.123-.29-.04-.559-.197-.719-.42-.113-.158-.196-.416-.058-.62m-2.384 3.581a.55.55 0 0 1-.286-.127c-.194-.16-.317-.43-.33-.724-.01-.238.06-.554.29-.727l.025-.017c.169-.114.392-.096.57.043a.96.96 0 0 1 .33.626l.004.03c.027.244-.025.576-.251.777l-.033.027a.45.45 0 0 1-.32.092'
        />
      </g>
    </g>
    <defs>
      <clipPath id='fe96966b596ad77866d296dc8874c762__a'>
        <path fill='#fff' d='M0 0h138v162H0z' />
      </clipPath>
      <filter
        id='fe96966b596ad77866d296dc8874c762__b'
        width={138}
        height={162}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1} />
        <feColorMatrix values='0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.06 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_1184_369' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feColorMatrix values='0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0 0.054902 0 0 0 0.1 0' />
        <feBlend in2='effect1_dropShadow_1184_369' result='effect2_dropShadow_1184_369' />
        <feBlend in='SourceGraphic' in2='effect2_dropShadow_1184_369' result='shape' />
      </filter>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(DerivLightIcCroppedDocumentIcon);
export default ForwardRef;
