import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTriangleExclamationXlFillIcon = (
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
      <path d='M12 7.5c.656 0 1.266.375 1.594.938l10.125 17.25c.328.609.328 1.312 0 1.875-.328.609-.938.937-1.594.937H1.875c-.703 0-1.312-.328-1.64-.937-.329-.563-.329-1.266 0-1.875l10.124-17.25A1.89 1.89 0 0 1 12 7.5m0 6a1.11 1.11 0 0 0-1.125 1.125v5.25c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-5.25A1.14 1.14 0 0 0 12 13.5M13.5 24c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5' />
    </g>
    <defs>
      <clipPath id='7a2915ce35db686093754d8fef12d915__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTriangleExclamationXlFillIcon);
export default ForwardRef;
