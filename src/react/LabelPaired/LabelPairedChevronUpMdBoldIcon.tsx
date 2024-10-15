import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpMdBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M7.469 7.469a.736.736 0 0 1 1.031 0l6.031 6c.281.312.281.781 0 1.062-.312.313-.781.313-1.062 0L8 9.062l-5.469 5.47c-.312.312-.781.312-1.062 0a.684.684 0 0 1 0-1.032z' />
    </g>
    <defs>
      <clipPath id='a5a122c1e48a0bf06463ac67db1629c6__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpMdBoldIcon);
export default ForwardRef;
