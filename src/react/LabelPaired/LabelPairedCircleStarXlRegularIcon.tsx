import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedCircleStarXlRegularIcon = (
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
      <path d='M12 7.5a10.48 10.48 0 0 0-9.094 5.25c-1.922 3.281-1.922 7.266 0 10.5C4.781 26.531 8.203 28.5 12 28.5c3.75 0 7.172-1.969 9.047-5.25 1.922-3.234 1.922-7.219 0-10.5C19.172 9.516 15.75 7.5 12 7.5M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30m.656-18.703 1.688 3.469 3.797.562a.76.76 0 0 1 .609.516.665.665 0 0 1-.187.75l-2.72 2.672.61 3.797c.047.28-.047.562-.281.703-.235.187-.563.187-.797.093L12 22.08l-3.422 1.78c-.234.094-.562.094-.797-.093-.234-.141-.328-.422-.281-.703l.656-3.797-2.765-2.672a.81.81 0 0 1-.188-.797c.094-.235.328-.469.61-.469l3.796-.562 1.688-3.47c.14-.233.422-.421.703-.421s.516.188.656.422m-1.875 4.453c-.094.234-.328.375-.562.422l-2.672.422 1.922 1.875c.187.187.281.422.234.656l-.469 2.672 2.391-1.266a.91.91 0 0 1 .703 0l2.39 1.266-.468-2.672c-.047-.234.047-.469.234-.656l1.922-1.875-2.672-.422c-.234 0-.468-.188-.562-.375L12 13.359z' />
    </g>
    <defs>
      <clipPath id='b0f5dc0d8bd4411abbc153f2c115c6b7__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedCircleStarXlRegularIcon);
export default ForwardRef;
