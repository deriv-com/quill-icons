import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileDocXlRegularIcon = (
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
      <path d='M3 28.5h1.5V30H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595V19.5h-1.5V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5m13.453-15c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zm-8.203 9h1.5c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 9.75 30h-1.5a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75m.75 6h.75c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75H9zm12.375-6h.75A1.88 1.88 0 0 1 24 24.375v.375c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.375a.4.4 0 0 0-.375-.375h-.75a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375h.75a.37.37 0 0 0 .375-.375v-.375c0-.375.328-.75.75-.75.375 0 .75.375.75.75v.375A1.85 1.85 0 0 1 22.125 30h-.75c-1.078 0-1.875-.797-1.875-1.875v-3.75c0-1.031.797-1.875 1.875-1.875M13.5 24.375c0-1.031.797-1.875 1.875-1.875h.75A1.88 1.88 0 0 1 18 24.375v3.75A1.85 1.85 0 0 1 16.125 30h-.75c-1.078 0-1.875-.797-1.875-1.875zM15.375 24a.37.37 0 0 0-.375.375v3.75c0 .234.14.375.375.375h.75a.37.37 0 0 0 .375-.375v-3.75a.4.4 0 0 0-.375-.375z' />
    </g>
    <defs>
      <clipPath id='aed1fa92d9072a5f82286efb3ca2bb39__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileDocXlRegularIcon);
export default ForwardRef;
