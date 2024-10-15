import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const DerivLightVisiblePhotoIconKycIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill='#C7E5E5'
      d='M22.522 11.226c-.187-.232-4.725-5.602-10.533-5.602s-10.346 5.37-10.533 5.602a1.206 1.206 0 0 0 0 1.549c.187.23 4.725 5.601 10.533 5.601s10.346-5.37 10.533-5.551a1.206 1.206 0 0 0 0-1.6M13.76 8.852a.98.98 0 0 1 1.22.553 1.02 1.02 0 0 1-.196 1.348.98.98 0 0 1-1.221-.553 1.02 1.02 0 0 1 .197-1.348m-1.772 7.573c-4.056 0-7.461-3.178-8.643-4.425a16.3 16.3 0 0 1 4.922-3.6 4.595 4.595 0 0 0 .2 5.25c1.158 1.527 3.139 2.131 4.927 1.504 1.789-.628 2.988-2.348 2.984-4.28 0-.88-.253-1.74-.728-2.474a16.3 16.3 0 0 1 4.922 3.6c-1.113 1.247-4.528 4.425-8.584 4.425'
    />
  </svg>
);
const ForwardRef = forwardRef(DerivLightVisiblePhotoIconKycIcon);
export default ForwardRef;
