import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedMemoCircleCheckXlRegularIcon = (
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
      <path d='M15 7.5H3c-.844 0-1.5.703-1.5 1.5v18c0 .844.656 1.5 1.5 1.5h10.875a9.3 9.3 0 0 0 1.547 1.5H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v6.328a5.3 5.3 0 0 0-1.5.61V9c0-.797-.703-1.5-1.5-1.5M3 12.75c0-.375.328-.75.75-.75h10.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75a.74.74 0 0 1-.75-.75m.75 3.75h9c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-9a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m0 4.5h6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75m16.5 7.5c1.875 0 3.563-.984 4.5-2.625.984-1.594.984-3.61 0-5.25-.937-1.594-2.625-2.625-4.5-2.625-1.922 0-3.61 1.031-4.547 2.625-.984 1.64-.984 3.656 0 5.25.938 1.64 2.625 2.625 4.547 2.625m0-12c2.39 0 4.594 1.313 5.813 3.375 1.218 2.11 1.218 4.688 0 6.75A6.7 6.7 0 0 1 20.25 30a6.71 6.71 0 0 1-5.86-3.375c-1.218-2.062-1.218-4.64 0-6.75 1.22-2.062 3.422-3.375 5.86-3.375m2.063 4.734c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078l-3.375 3.375c-.282.282-.797.282-1.078 0l-1.875-1.875c-.282-.28-.282-.796 0-1.078.28-.28.796-.28 1.078 0l1.359 1.36z' />
    </g>
    <defs>
      <clipPath id='322110cb94a85b4877e26a368952d16d__a'>
        <path d='M0 0h27v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedMemoCircleCheckXlRegularIcon);
export default ForwardRef;
