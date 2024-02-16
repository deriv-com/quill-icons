import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleDollarCaptionRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={12}
    height={18}
    viewBox='0 0 12 18'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M11.25 9.5a5.4 5.4 0 0 0-.703-2.625 5.4 5.4 0 0 0-1.922-1.922 5.25 5.25 0 0 0-5.25 0 5.4 5.4 0 0 0-1.922 1.922A5.4 5.4 0 0 0 .75 9.5q.024 1.43.703 2.625a5.4 5.4 0 0 0 1.922 1.922 5.25 5.25 0 0 0 5.25 0 5.4 5.4 0 0 0 1.922-1.922A5.4 5.4 0 0 0 11.25 9.5M0 9.5a6.14 6.14 0 0 1 .797-3A6.2 6.2 0 0 1 3 4.297 6.1 6.1 0 0 1 6 3.5q1.57 0 3 .797A6.2 6.2 0 0 1 11.203 6.5q.774 1.359.797 3a6.14 6.14 0 0 1-.797 3A6.2 6.2 0 0 1 9 14.703a6.1 6.1 0 0 1-3 .797 6.1 6.1 0 0 1-3-.797A6.2 6.2 0 0 1 .797 12.5 6.14 6.14 0 0 1 0 9.5m6.375-3.187v.539q.469.046.938.187.022.024.046.024t.047.023q.329.117.258.445-.117.329-.445.282a1 1 0 0 0-.164-.07 9 9 0 0 0-.54-.118q-.703-.093-1.171.117-.422.21-.446.469-.07.328.235.492.375.235 1.055.399h.023q.68.163 1.266.515.68.492.562 1.313-.188.774-.89 1.03a2.4 2.4 0 0 1-.774.165v.563q-.046.351-.375.374-.352-.023-.375-.374v-.61q-.351-.071-.773-.187a6 6 0 0 1-.47-.164q-.327-.14-.234-.47.118-.303.47-.234l.468.141q.422.14.656.188.703.092 1.125-.094.374-.165.422-.469.07-.352-.234-.562a3.4 3.4 0 0 0-.961-.375A.2.2 0 0 0 6 9.828a.2.2 0 0 0-.07-.023 5.2 5.2 0 0 1-1.22-.47 1.5 1.5 0 0 1-.468-.515q-.187-.327-.094-.75.187-.75.891-1.03.282-.095.586-.165v-.562q.023-.353.375-.375.329.022.375.375' />
    </g>
    <defs>
      <clipPath id='c8f037cc0138e5b2cab18ff0d1d327e1__a'>
        <path d='M0 0h12v18H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleDollarCaptionRegularIcon);
export default ForwardRef;
