import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedRectangleBarcodeXlRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={27}
    height={36}
    viewBox='0 0 27 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M3 9c-.844 0-1.5.703-1.5 1.5v15c0 .844.656 1.5 1.5 1.5h21c.797 0 1.5-.656 1.5-1.5v-15c0-.797-.703-1.5-1.5-1.5zm-3 1.5c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm4.5 2.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm13.5 0c0-.375.328-.75.75-.75.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm3.75-.75c.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-10.5c0-.375.328-.75.75-.75m-14.25.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm3.75-.75c.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-10.5c0-.375.328-.75.75-.75m3 .75c0-.375.328-.75.75-.75.375 0 .75.375.75.75v10.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75z' />
    </g>
    <defs>
      <clipPath id='e65b9dacbd708efb1ab60fd9d29ae748__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedRectangleBarcodeXlRegularIcon);
export default ForwardRef;
