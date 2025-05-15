import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedGraduationCapXlFillIcon = (
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
      <path d='M15 7.5c.375 0 .75.094 1.078.234L29.25 12.47c.422.14.75.562.75 1.031 0 .516-.328.938-.75 1.078l-13.172 4.735c-.328.14-.703.187-1.125.187-.375 0-.75-.047-1.078-.187l-7.5-2.72c.422-.421.938-.75 1.5-.984l7.36-2.906c.421-.14.609-.562.421-.984a.73.73 0 0 0-.937-.422l-7.36 2.906c-.937.375-1.734.938-2.343 1.688a6.37 6.37 0 0 0-1.266 3.797v1.171c.281.61.469 1.313.61 1.97.28 1.265.515 3.093.093 5.108-.047.188-.14.375-.328.47-.187.093-.375.14-.562.093l-3-.75A.73.73 0 0 1 0 27.281c-.047-.234 0-.515.14-.703.376-.562.75-1.172 1.032-1.781C1.734 23.719 2.25 22.359 2.25 21v-1.312c0-1.5.422-2.907 1.172-4.125l-2.719-.985C.281 14.438 0 14.016 0 13.5c0-.469.281-.89.703-1.031l13.172-4.735c.328-.14.703-.234 1.125-.234M6 25.125l.703-6.797 6.656 2.39A4.8 4.8 0 0 0 15 21c.516 0 1.078-.094 1.594-.281l6.656-2.39.75 6.796c0 1.688-4.031 3.375-9 3.375s-9-1.687-9-3.375' />
    </g>
    <defs>
      <clipPath id='a174062e0984855f8123e9205afaee23__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedGraduationCapXlFillIcon);
export default ForwardRef;
