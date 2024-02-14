import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLanguageXlRegularIcon = (
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
      <path d='M14.25 10.5H3q-.656 0-1.078.422Q1.5 11.343 1.5 12v12q0 .657.422 1.078.421.422 1.078.422h11.25zm1.5 0v15H27q.657 0 1.078-.422.422-.421.422-1.078V12q0-.656-.422-1.078Q27.657 10.5 27 10.5zM30 12v12q-.047 1.266-.89 2.11-.844.843-2.11.89H3q-1.266-.047-2.11-.89Q.048 25.265 0 24V12q.047-1.266.89-2.11Q1.735 9.048 3 9h24q1.266.047 2.11.89.843.844.89 2.11M8.203 13.969l3 7.5q.188.656-.422.984-.655.188-.984-.422L9.375 21h-3.75l-.422 1.031q-.328.61-.984.422-.61-.328-.422-.984l3-7.5q.234-.47.703-.469.47 0 .703.469M7.5 16.266 6.188 19.5h2.625zm15.75-2.016V15h3q.704.047.75.75-.046.704-.75.75h-.234l-.188.563a9.5 9.5 0 0 1-2.062 3.234l.468.281.891.516q.563.422.281 1.031-.422.563-1.031.281l-.89-.562a5.3 5.3 0 0 1-.891-.563 8 8 0 0 1-1.219.75l-.797.375q-.655.235-.984-.328-.281-.655.328-.984l.797-.422q.375-.188.75-.422l-.985-.984q-.42-.516 0-1.032.516-.468 1.032 0l1.078 1.032.047.047a7.8 7.8 0 0 0 1.78-2.766V16.5H18.75q-.704-.046-.75-.75.046-.703.75-.75h3v-.75q.046-.703.75-.75.704.047.75.75' />
    </g>
    <defs>
      <clipPath id='b57406ecc6a68dda79d94e5a4520fd77__a'>
        <path d='M0 0h30v36H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLanguageXlRegularIcon);
export default ForwardRef;
