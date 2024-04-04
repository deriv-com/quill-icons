import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedTelegramXlIcon = (
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
      <path d='M12 6.375c6.375 0 11.625 5.25 11.625 11.625 0 6.422-5.25 11.625-11.625 11.625C5.578 29.625.375 24.422.375 18 .375 11.625 5.578 6.375 12 6.375m5.344 7.922a.8.8 0 0 0 0-.469c0-.094-.094-.234-.14-.281-.142-.14-.376-.14-.47-.14-.422 0-1.125.234-4.359 1.593-1.125.469-3.375 1.406-6.75 2.906-.562.235-.844.422-.89.657-.048.375.562.515 1.265.75.61.187 1.406.421 1.828.421.375 0 .797-.14 1.266-.468 3.14-2.157 4.781-3.235 4.875-3.235s.187-.047.234 0c.094.094.094.188.047.235-.047.234-3 2.953-3.187 3.14-.657.657-1.407 1.078-.235 1.828.985.657 1.547 1.078 2.578 1.735.656.422 1.172.937 1.828.89.329-.047.657-.328.797-1.218.422-2.016 1.172-6.516 1.313-8.344' />
    </g>
    <defs>
      <clipPath id='f118da561e73f685db348bf6e370a179__a'>
        <path d='M0 0h24v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedTelegramXlIcon);
export default ForwardRef;
