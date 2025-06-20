import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowUpFromBracketLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={30}
    viewBox='0 0 18 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='m9.664 5.773 4.961 5c.39.391.39.977 0 1.329-.352.39-.937.39-1.328 0L9.898 8.703v9.61c0 .546-.39.937-.937.937a.925.925 0 0 1-.938-.937v-9.61l-3.398 3.399a.856.856 0 0 1-1.29 0c-.39-.352-.39-.938 0-1.329l5-5c.352-.351.938-.351 1.33 0M2.125 18.938v3.125c0 .898.664 1.562 1.563 1.562h10.625c.859 0 1.562-.664 1.562-1.562v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v3.125a3.443 3.443 0 0 1-3.437 3.437H3.688A3.42 3.42 0 0 1 .25 22.063v-3.125c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' />
    </g>
    <defs>
      <clipPath id='34aa67a7511f88ecf2ab593040dabb7c__a'>
        <path d='M0 0h18v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowUpFromBracketLgBoldIcon);
export default ForwardRef;
