import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleAdCaptionBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={14}
    height={18}
    viewBox='0 0 14 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M1.75 5.375q-.352.023-.375.375v7.5q.023.352.375.375h10.5q.352-.023.375-.375v-7.5q-.023-.352-.375-.375zm-1.5.375q.024-.632.445-1.055.422-.421 1.055-.445h10.5q.633.024 1.055.445.421.423.445 1.055v7.5a1.52 1.52 0 0 1-.445 1.055q-.422.421-1.055.445H1.75a1.52 1.52 0 0 1-1.055-.445A1.52 1.52 0 0 1 .25 13.25zm5.39 1.805 1.688 3.375q.165.492-.258.773-.492.165-.75-.258l-.14-.258H4.07l-.14.258q-.258.423-.75.235-.445-.258-.235-.75l1.688-3.375a.53.53 0 0 1 .492-.305q.351 0 .516.305m-.515 1.523-.492.985h.984zm4.313.422q-.516.047-.563.563.047.514.563.562.514-.047.562-.562-.047-.516-.562-.563M10 8.469v-.656q.047-.516.563-.563.514.047.562.563v3.374q-.047.516-.562.563a.54.54 0 0 1-.399-.164q-.328.164-.726.164-.727-.024-1.196-.492-.468-.47-.492-1.195.024-.727.492-1.196.47-.468 1.195-.492.306 0 .563.094' />
    </g>
    <defs>
      <clipPath id='1bf51931279d3dcde06845120debaec4__a'>
        <path d='M0 0h14v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleAdCaptionBoldIcon);
export default ForwardRef;
