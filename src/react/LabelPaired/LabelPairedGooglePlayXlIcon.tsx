import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGooglePlayXlIcon = (
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
      <path d='m15.234 16.969 2.813-2.813L4.922 6.61zM2.204 6 14.25 18 2.203 30q-.984-.516-1.031-1.64V7.64Q1.219 6.516 2.203 6m19.921 10.594q.703.515.703 1.406t-.656 1.406l-2.813 1.64L16.312 18l3.047-3zM4.922 29.39l10.312-10.36 2.813 2.813z' />
    </g>
    <defs>
      <clipPath id='0b38240060e36675e06bce98638bd54b__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayXlIcon);
export default ForwardRef;
