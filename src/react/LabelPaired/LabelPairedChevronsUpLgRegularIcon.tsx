import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsUpLgRegularIcon = (
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
      <path d='m10.43 7.57 7.5 7.5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L10 8.899l-7.07 7.07a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0m7.5 15a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L10 16.399l-7.07 7.07a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l7.5-7.5a.66.66 0 0 1 .899 0z' />
    </g>
    <defs>
      <clipPath id='8f4c0a746a2a639e077d112d4451be13__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsUpLgRegularIcon);
export default ForwardRef;
