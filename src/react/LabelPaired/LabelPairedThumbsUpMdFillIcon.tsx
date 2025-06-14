import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpMdFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={16}
    height={24}
    viewBox='0 0 16 24'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M9.781 5.031c.813.188 1.344.969 1.188 1.782l-.094.343A7.6 7.6 0 0 1 10 9.5h4.5c.813 0 1.5.688 1.5 1.5 0 .594-.344 1.094-.812 1.344.343.281.562.687.562 1.156 0 .75-.531 1.344-1.219 1.5.125.219.219.469.219.75 0 .688-.437 1.25-1.062 1.438.03.093.062.218.062.312a1.5 1.5 0 0 1-1.5 1.5H9.188a2.87 2.87 0 0 1-1.657-.5l-1.218-.781A3.05 3.05 0 0 1 5 15.219V11.75c0-.937.406-1.781 1.125-2.344l.219-.187c.812-.688 1.406-1.594 1.593-2.656L8 6.219c.188-.813.969-1.344 1.781-1.188M1 10h2c.531 0 1 .469 1 1v7c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1v-7c0-.531.438-1 1-1' />
    </g>
    <defs>
      <clipPath id='646569ab3f8cdeb788195e716681c426__a'>
        <path d='M0 0h16v24H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpMdFillIcon);
export default ForwardRef;
