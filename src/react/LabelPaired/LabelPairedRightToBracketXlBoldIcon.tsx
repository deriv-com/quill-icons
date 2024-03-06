import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRightToBracketXlBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={36}
    viewBox='0 0 24 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9 23.156 14.156 18 9 12.844v2.531q-.093 1.032-1.125 1.125H2.25v3h5.625q1.032.094 1.125 1.125zM16.5 18q0 .844-.61 1.453l-5.437 5.39q-.61.657-1.547.657a1.97 1.97 0 0 1-1.5-.656 2.2 2.2 0 0 1-.656-1.5V21.75h-4.5a2.45 2.45 0 0 1-1.594-.656A2.45 2.45 0 0 1 0 19.5v-3q.047-.937.656-1.594a2.45 2.45 0 0 1 1.594-.656h4.5v-1.594q.047-.891.656-1.5a1.97 1.97 0 0 1 1.5-.656q.891 0 1.547.656l5.438 5.39q.609.61.609 1.454m-.375 8.25h3.75q.797 0 1.313-.562.562-.516.562-1.313v-12.75q0-.797-.562-1.312-.516-.563-1.313-.563h-3.75Q15.095 9.657 15 8.625q.095-1.03 1.125-1.125h3.75q1.734.047 2.906 1.219T24 11.625v12.75q-.046 1.734-1.219 2.906-1.172 1.173-2.906 1.219h-3.75q-1.03-.093-1.125-1.125.095-1.03 1.125-1.125' />
    </g>
    <defs>
      <clipPath id='5b7fd121157828985e6e723ee5582f67__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRightToBracketXlBoldIcon);
export default ForwardRef;
