import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFilterLgFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M.117 7.648c.274-.546.82-.898 1.446-.898h16.875c.585 0 1.132.352 1.406.898a1.64 1.64 0 0 1-.235 1.68L12.5 18.04V23c0 .508-.273.938-.703 1.133s-.938.156-1.328-.117l-2.5-1.875c-.313-.235-.469-.586-.469-1.016v-3.086L.352 9.33a1.64 1.64 0 0 1-.235-1.68' />
    </g>
    <defs>
      <clipPath id='57fe80075fe654f569f763eee588050d__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFilterLgFillIcon);
export default ForwardRef;
