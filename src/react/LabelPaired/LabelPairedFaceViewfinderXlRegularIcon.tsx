import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFaceViewfinderXlRegularIcon = (
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
      <path d='M2.25 6h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.5c-.422 0-.75.375-.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5A2.25 2.25 0 0 1 2.25 6m19.5 0C22.969 6 24 7.031 24 8.25v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375-.375-.75-.75-.75h-4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75zM0 27.75v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-4.5A2.22 2.22 0 0 1 0 27.75M21.75 30h-4.5a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v4.5A2.25 2.25 0 0 1 21.75 30m-10.5-13.875a1.11 1.11 0 0 1-1.125 1.125C9.469 17.25 9 16.781 9 16.125c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m2.625 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125M12 12c-2.156 0-4.125 1.172-5.203 3-1.078 1.875-1.078 4.172 0 6A5.97 5.97 0 0 0 12 24a5.95 5.95 0 0 0 5.156-3c1.078-1.828 1.078-4.125 0-6-1.078-1.828-3.047-3-5.156-3m0 13.5a7.46 7.46 0 0 1-6.516-3.75c-1.359-2.297-1.359-5.156 0-7.5C6.844 11.953 9.281 10.5 12 10.5c2.672 0 5.11 1.453 6.469 3.75 1.36 2.344 1.36 5.203 0 7.5-1.36 2.344-3.797 3.75-6.469 3.75m-1.969-6.375c.375.703 1.125 1.125 1.969 1.125.797 0 1.547-.422 1.922-1.125.234-.328.656-.469 1.031-.234.375.187.469.656.281 1.03C14.578 21 13.36 21.798 12 21.798c-1.406 0-2.625-.797-3.281-1.875-.188-.375-.094-.844.281-1.031.375-.235.844-.094 1.031.234' />
    </g>
    <defs>
      <clipPath id='48ba8ce5f8d4f9042c321ead6221ed55__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFaceViewfinderXlRegularIcon);
export default ForwardRef;
