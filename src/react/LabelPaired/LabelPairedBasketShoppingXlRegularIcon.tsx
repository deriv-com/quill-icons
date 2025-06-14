import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedBasketShoppingXlRegularIcon = (
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
      <path d='M15.328 6.14c.375-.234.844-.093 1.031.235L21.422 15h4.828c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-1.125l-2.812 11.25c-.329 1.313-1.547 2.25-2.907 2.25H7.594c-1.407 0-2.578-.937-2.953-2.25L1.875 16.5H.75a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.781l5.063-8.625c.187-.328.656-.469 1.031-.234.328.187.469.656.234 1.03L7.266 15h12.422l-4.594-7.828c-.235-.375-.094-.844.234-1.031M3.422 16.5 6.14 27.375c.14.656.75 1.125 1.453 1.125h11.812c.657 0 1.266-.469 1.453-1.125L23.58 16.5zm7.078 3.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75m3-.75c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75m4.5.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-4.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75' />
    </g>
    <defs>
      <clipPath id='559bcbd304760c18a3aa2175d1734a43__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedBasketShoppingXlRegularIcon);
export default ForwardRef;
