import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedFileShieldXlRegularIcon = (
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
      <path d='M15 28.5h.14c.376.422.797.797 1.266 1.172a3 3 0 0 1-1.406.375H3c-1.687 0-3-1.36-3-3V9c0-1.64 1.313-3 3-3h7.313c.562 0 1.171.281 1.593.703l5.39 5.39c.423.423.704 1.032.704 1.595v2.015l-1.5.61V15h-5.25A2.22 2.22 0 0 1 9 12.75V7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5zm1.453-15c-.047-.094-.094-.234-.187-.328l-5.438-5.438c-.094-.093-.234-.14-.328-.187v5.203c0 .422.328.75.75.75zM15 20.156c.047 2.485 1.031 6.047 4.5 7.969v-9.797zm10.5 0L21 18.328v9.797c3.422-1.922 4.406-5.484 4.453-7.969zm-4.828-3.562 5.625 2.25c.422.187.703.61.703 1.031 0 3-1.219 7.922-6.328 10.078-.281.094-.61.094-.89 0-5.11-2.156-6.282-7.078-6.282-10.078 0-.422.281-.844.703-1.031l5.625-2.25c.235-.094.563-.094.797 0z' />
    </g>
    <defs>
      <clipPath id='521f905349a9332f0cb72765b64907d8__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedFileShieldXlRegularIcon);
export default ForwardRef;
