import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedObjectsAlignLeftXlRegularIcon = (
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
      <path d='M0 6.75C0 6.375.328 6 .75 6c.375 0 .75.375.75.75v22.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm7.5 7.5c0 .422.328.75.75.75h13.5c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75H8.25c-.422 0-.75.375-.75.75zm-1.5-3A2.25 2.25 0 0 1 8.25 9h13.5C22.969 9 24 10.031 24 11.25v3a2.25 2.25 0 0 1-2.25 2.25H8.25A2.22 2.22 0 0 1 6 14.25zm1.5 13.5c0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75h-7.5c-.422 0-.75.375-.75.75zm-1.5-3a2.25 2.25 0 0 1 2.25-2.25h7.5c1.219 0 2.25 1.031 2.25 2.25v3A2.25 2.25 0 0 1 15.75 27h-7.5A2.22 2.22 0 0 1 6 24.75z' />
    </g>
    <defs>
      <clipPath id='2cae536dacd16b58de44ff19cbfb59e9__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedObjectsAlignLeftXlRegularIcon);
export default ForwardRef;
