import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedEnvelopeXlRegularIcon = (
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
      <path d='M3 10.5c-.844 0-1.5.703-1.5 1.5v1.875l9.14 6.75a2.33 2.33 0 0 0 2.672 0l9.188-6.75V12c0-.797-.703-1.5-1.5-1.5zm-1.5 5.25V24c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5v-8.25l-8.297 6.094a3.88 3.88 0 0 1-4.453 0zM0 12c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3z' />
    </g>
    <defs>
      <clipPath id='bc578ea459466b9209427052b02e1189__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedEnvelopeXlRegularIcon);
export default ForwardRef;
