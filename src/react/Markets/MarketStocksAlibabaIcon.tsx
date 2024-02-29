import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const MarketStocksAlibabaIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 32 32'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g clipPath='url(#10f6794575dd3330ac049246545bd952__a)'>
      <path
        fill='#FF7503'
        d='M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16'
      />
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M18.118 10h-1.007c-1.715.107-3.408.579-5.016 1.222-2.272.922-4.373 2.293-5.98 4.158a16 16 0 0 0-1.437 1.972c-.428.708-.75 1.544-.664 2.401.064.622.407 1.179.922 1.522.686.472 1.522.6 2.336.622a12.6 12.6 0 0 0 4.073-.75c.793-.3 1.586-.644 2.336-1.051-1.414.386-2.872.686-4.351.772-.879.043-1.822.043-2.637-.365a1 1 0 0 1-.194-.08q.073.036.151.059c-.257-.15-.45-.407-.45-.707 0-.365.236-.644.472-.9.493-.515 1.136-.88 1.8-1.158v-1.458a5.7 5.7 0 0 0 3.687.022c.6-.193 1.18-.515 1.694-.88.043.172.085.365.085.537h.322c0-.28-.043-.58-.236-.815-.193-.236-.493-.364-.793-.407q.064.063.132.127c.093.088.189.18.275.28-1.286.943-3.022 1.265-4.565.815.178-.199.37-.383.561-.566.222-.214.443-.426.639-.656a7 7 0 0 0-.21-.557q-.058-.14-.112-.28c.9-.3 1.801-.6 2.701-.878 1.672-.514 3.387-.879 5.102-1.179l-.239-.202c-.17-.145-.335-.288-.511-.42l.182-.117q.087-.055.182-.118.304.081.622.158c.528.13 1.068.264 1.543.463.407.172.814.386 1.05.772a.97.97 0 0 1 .129.509 1 1 0 0 1-.021.112c-.108.515-.408.987-.708 1.415a28 28 0 0 1-1.886 2.337l-.4.452c-.47.53-.94 1.059-1.358 1.627-.321.45-.621.943-.686 1.5-.043.408.129.88.515 1.072.557.3 1.222.236 1.843.172 1.093-.15 2.144-.493 3.173-.858a37 37 0 0 0 3.9-1.672l.175-.087c.93-.464 1.873-.935 2.741-1.52l-.528.217c-1.025.424-2.055.85-3.116 1.197-1.93.665-3.944 1.158-5.98 1.287h-.073c-.177.003-.377.005-.528-.108-.128-.086-.128-.278-.085-.407.08-.242.237-.465.38-.669l.027-.038c.381-.501.789-.987 1.197-1.473.761-.907 1.525-1.817 2.125-2.836.343-.579.622-1.243.58-1.929 0-.707-.365-1.393-.944-1.8-.857-.622-1.93-.772-2.937-.858m-.545.761-.033-.01-.003-.002zm-.098-.032-.064-.022q.032.012.064.022m-.919.427-.002.002.09.08z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <clipPath id='10f6794575dd3330ac049246545bd952__a'>
        <path fill='#fff' d='M0 0h32v32H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(MarketStocksAlibabaIcon);
export default ForwardRef;
