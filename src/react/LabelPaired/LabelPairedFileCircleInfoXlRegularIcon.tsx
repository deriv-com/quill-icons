import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileCircleInfoXlRegularIcon = (
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
      <path d='M3 28.5h10.875a9.3 9.3 0 0 0 1.547 1.5H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595v1.64a5.3 5.3 0 0 0-1.5.61V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5m13.453-15c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zm9.047 9.75c0-1.875-1.031-3.562-2.625-4.5-1.64-.984-3.656-.984-5.25 0-1.64.938-2.625 2.625-2.625 4.5 0 1.922.984 3.61 2.625 4.547 1.594.984 3.61.984 5.25 0 1.594-.938 2.625-2.625 2.625-4.547m-12 0a6.7 6.7 0 0 1 3.375-5.812c2.063-1.22 4.64-1.22 6.75 0C25.688 18.656 27 20.859 27 23.25c0 2.438-1.312 4.64-3.375 5.86-2.11 1.218-4.687 1.218-6.75 0a6.71 6.71 0 0 1-3.375-5.86m6.75-1.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125m-1.5 4.5c0-.375.328-.75.75-.75V24a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v2.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-1.5a.74.74 0 0 1-.75-.75' />
    </g>
    <defs>
      <clipPath id='25a2cb57f2427373fa700121abf4699f__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileCircleInfoXlRegularIcon);
export default ForwardRef;
