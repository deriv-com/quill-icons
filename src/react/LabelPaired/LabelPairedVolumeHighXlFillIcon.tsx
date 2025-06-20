import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedVolumeHighXlFillIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={36}
    viewBox='0 0 30 36'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M24.984 7.547C28.031 10.03 30 13.78 30 18c0 4.266-1.969 8.016-5.016 10.5a1.13 1.13 0 0 1-1.593-.187c-.375-.47-.282-1.172.187-1.547A11.27 11.27 0 0 0 27.75 18c0-3.516-1.64-6.656-4.172-8.719-.469-.375-.562-1.078-.187-1.594a1.17 1.17 0 0 1 1.593-.14m-2.812 3.469C24.187 12.703 25.5 15.188 25.5 18c0 2.86-1.312 5.344-3.328 6.984-.516.422-1.219.328-1.594-.14-.422-.469-.328-1.172.14-1.594A6.62 6.62 0 0 0 23.25 18a6.6 6.6 0 0 0-2.531-5.203 1.17 1.17 0 0 1-.14-1.594c.374-.469 1.077-.562 1.593-.187m-2.86 3.515C20.345 15.375 21 16.594 21 18c0 1.453-.656 2.672-1.687 3.516a1.13 1.13 0 0 1-1.594-.188c-.375-.469-.282-1.172.187-1.547A2.32 2.32 0 0 0 18.75 18c0-.703-.328-1.312-.844-1.734-.468-.375-.562-1.078-.187-1.594a1.17 1.17 0 0 1 1.593-.14m-5.203-6.89c.516.234.891.797.891 1.359v18c0 .61-.375 1.125-.89 1.406a1.52 1.52 0 0 1-1.641-.281L6.14 22.5H3c-1.687 0-3-1.312-3-3v-3c0-1.64 1.313-3 3-3h3.14l6.329-5.578a1.52 1.52 0 0 1 1.64-.281' />
    </g>
    <defs>
      <clipPath id='11eeafaaf4c6afe596f22bfa6eaab445__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedVolumeHighXlFillIcon);
export default ForwardRef;
