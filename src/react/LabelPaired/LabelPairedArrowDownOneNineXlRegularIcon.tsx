import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedArrowDownOneNineXlRegularIcon = (
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
      <path d='M21 8.25V15h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H18a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h1.5V9.328l-1.266.422c-.422.094-.843-.094-.984-.469-.094-.422.094-.844.516-.984l2.25-.75a.85.85 0 0 1 .656.14c.187.141.328.329.328.61zM8.016 28.313c-.282.28-.797.28-1.078 0l-4.5-4.5c-.282-.282-.282-.797 0-1.079.28-.28.796-.28 1.078 0L6.75 25.97V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v17.719l3.188-3.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078zM20.063 19.5c-.891 0-1.688.469-2.157 1.219-.422.797-.422 1.687 0 2.437.469.797 1.266 1.219 2.157 1.219.843 0 1.64-.422 2.109-1.219.422-.75.422-1.64 0-2.437-.469-.75-1.266-1.219-2.11-1.219m-3.938 2.438A3.93 3.93 0 0 1 20.063 18C22.219 18 24 19.781 24 21.938c0 .093 0 .14-.047.187H24a4.09 4.09 0 0 1-1.031 2.719l-2.907 3.422c-.28.328-.75.328-1.078.093-.328-.28-.328-.75-.093-1.078l1.218-1.406h-.047a3.9 3.9 0 0 1-3.937-3.937' />
    </g>
    <defs>
      <clipPath id='080ba4e330b645aff7350b4b6be5f8e4__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedArrowDownOneNineXlRegularIcon);
export default ForwardRef;
