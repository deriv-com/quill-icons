import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9.75c-.422 0-.75.375-.75.75v15c0 .422.328.75.75.75h21c.375 0 .75-.328.75-.75v-15c0-.375-.375-.75-.75-.75zm-3 .75c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm10.734 3.656 3.375 6.75c.282.563.047 1.219-.515 1.5-.516.282-1.219.047-1.5-.515l-.235-.516H7.594l-.235.516c-.28.562-.937.797-1.5.515-.562-.281-.796-.937-.515-1.5l3.375-6.75A1.15 1.15 0 0 1 9.75 13.5c.422 0 .797.234.984.656m-.984 3-1.031 1.969h2.015zm8.625.844a1.11 1.11 0 0 0-1.125 1.125c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125A1.14 1.14 0 0 0 18.375 18m1.125-2.016v-1.359c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v6.75a1.11 1.11 0 0 1-1.125 1.125c-.328 0-.61-.094-.797-.328a3.14 3.14 0 0 1-1.453.328A3.36 3.36 0 0 1 15 19.125c0-1.828 1.5-3.375 3.375-3.375.375 0 .75.094 1.125.234' />
    </g>
    <defs>
      <clipPath id='e067ec082677d79d8d85d09bfa7185d8__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdXlBoldIcon);
export default ForwardRef;
