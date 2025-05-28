import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChevronsLeftXlFillIcon = (
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
      <path d='m1.922 16.969 9-9a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L5.108 18l7.922 7.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11m18-9a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L14.108 18l7.922 7.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11z' />
    </g>
    <defs>
      <clipPath id='fda44811c16da98dc7741b3477d60c86__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChevronsLeftXlFillIcon);
export default ForwardRef;
