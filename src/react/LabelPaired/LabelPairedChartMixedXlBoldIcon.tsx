import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedChartMixedXlBoldIcon = (
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
      <path d='m23.578 9.516-7.875 6.75a1.195 1.195 0 0 1-1.453 0l-5.344-4.688-7.172 4.735a1.076 1.076 0 0 1-1.546-.282c-.375-.515-.235-1.218.28-1.593l7.876-5.25a1.13 1.13 0 0 1 1.36.093L15 13.921l7.125-6.14a1.17 1.17 0 0 1 1.594.14 1.17 1.17 0 0 1-.14 1.595M9.375 26.25v-7.5A.4.4 0 0 0 9 18.375a.37.37 0 0 0-.375.375v7.5c0 .234.14.375.375.375a.37.37 0 0 0 .375-.375M9 16.5c1.219 0 2.25 1.031 2.25 2.25v7.5A2.25 2.25 0 0 1 9 28.5a2.22 2.22 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 9 16.5m-5.625 9.75v-3A.4.4 0 0 0 3 22.875a.37.37 0 0 0-.375.375v3c0 .234.14.375.375.375a.37.37 0 0 0 .375-.375M3 21c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 3 28.5a2.22 2.22 0 0 1-2.25-2.25v-3A2.25 2.25 0 0 1 3 21m12.375.75a.4.4 0 0 0-.375-.375.37.37 0 0 0-.375.375v4.5c0 .234.14.375.375.375a.37.37 0 0 0 .375-.375zm-2.625 0A2.25 2.25 0 0 1 15 19.5c1.219 0 2.25 1.031 2.25 2.25v4.5A2.25 2.25 0 0 1 15 28.5a2.22 2.22 0 0 1-2.25-2.25zm8.625 4.5v-7.5a.4.4 0 0 0-.375-.375.37.37 0 0 0-.375.375v7.5c0 .234.14.375.375.375a.37.37 0 0 0 .375-.375M21 16.5c1.219 0 2.25 1.031 2.25 2.25v7.5A2.25 2.25 0 0 1 21 28.5a2.22 2.22 0 0 1-2.25-2.25v-7.5A2.25 2.25 0 0 1 21 16.5' />
    </g>
    <defs>
      <clipPath id='975519cdb28ff79e593391880e4209d1__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedChartMixedXlBoldIcon);
export default ForwardRef;
