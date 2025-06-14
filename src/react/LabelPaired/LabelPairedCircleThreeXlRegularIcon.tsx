import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleThreeXlRegularIcon = (
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
      <path d='M12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M8.25 12v.047h6.703c.328 0 .61.187.703.469.14.28.047.609-.187.843L11.766 16.5h.937a3.76 3.76 0 0 1 3.75 3.75c0 2.11-1.64 3.797-3.75 3.797h-1.687c-1.266 0-2.485-.61-3.282-1.64l-.093-.188c-.282-.328-.188-.797.14-1.032.328-.28.797-.187 1.032.141l.14.14c.469.657 1.266 1.079 2.063 1.079h1.687c1.266 0 2.25-1.031 2.25-2.297a2.25 2.25 0 0 0-2.25-2.25H9.75a.84.84 0 0 1-.75-.469c-.094-.281 0-.61.234-.843l3.704-3.188H8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75' />
    </g>
    <defs>
      <clipPath id='05216037cf8a3d52ad4a093254ce87c8__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleThreeXlRegularIcon);
export default ForwardRef;
