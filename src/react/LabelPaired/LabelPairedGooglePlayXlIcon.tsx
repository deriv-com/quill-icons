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
      <path d='m15.234 17.016 2.813-2.813L4.875 6.61zM2.204 6l12 12-12 12a1.78 1.78 0 0 1-1.032-1.64V7.687c0-.75.422-1.36 1.031-1.688m19.921 10.594c.89.656.89 2.203.047 2.86l-2.813 1.593L16.266 18l3.093-3zM4.875 29.39l10.36-10.36 2.812 2.813z' />
    </g>
    <defs>
      <clipPath id='7e66e090b40be1cf2efa1305d813bbe4__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGooglePlayXlIcon);
export default ForwardRef;
