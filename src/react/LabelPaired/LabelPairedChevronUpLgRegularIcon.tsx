import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronUpLgRegularIcon = (
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
      <path d='M9.531 10.07a.66.66 0 0 1 .899 0l7.5 7.5a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0L10 11.399l-7.07 7.07a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899z' />
    </g>
    <defs>
      <clipPath id='4107677cd86dfe73871e19ced3eb8bc6__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronUpLgRegularIcon);
export default ForwardRef;
