import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedThumbsUpLgBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={30}
    viewBox='0 0 20 30'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M12.617 6.867a2.804 2.804 0 0 1 1.953 3.477l-.234.781c-.117.43-.274.86-.469 1.25H17.5c1.367 0 2.5 1.133 2.5 2.5 0 .703-.312 1.328-.742 1.797.078.234.117.469.117.742 0 .781-.39 1.523-1.016 1.992.04.157.078.313.078.508 0 .781-.39 1.484-.937 1.953-.078 1.328-1.172 2.422-2.5 2.422h-3.828c-.86 0-1.719-.273-2.422-.742l-2.422-1.602a.94.94 0 0 1-.234-1.328.897.897 0 0 1 1.289-.234l2.422 1.601c.39.274.86.43 1.367.43H15c.313 0 .625-.312.625-.625 0-.078-.04-.117-.04-.195a.98.98 0 0 1 .548-1.133c.234-.078.43-.313.43-.547a.6.6 0 0 0-.157-.39 1 1 0 0 1-.117-.938c.078-.313.352-.508.703-.586.274-.04.508-.312.508-.625 0-.156-.078-.273-.156-.39a.88.88 0 0 1-.235-.86 1 1 0 0 1 .586-.664.635.635 0 0 0 .43-.586c0-.312-.312-.625-.625-.625h-5.234a.91.91 0 0 1-.82-.508c-.157-.312-.157-.664.038-.937a7.6 7.6 0 0 0 1.055-2.188l.234-.781a.98.98 0 0 0-.664-1.172.98.98 0 0 0-1.171.664l-.196.781a5.6 5.6 0 0 1-1.172 2.11l-2.03 2.187a.933.933 0 0 1-1.33.078.97.97 0 0 1-.038-1.328l1.992-2.187c.352-.39.625-.86.781-1.367l.196-.782a2.804 2.804 0 0 1 3.476-1.953M1.25 13h2.5c.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25h-2.5C.547 24.25 0 23.703 0 23v-8.75C0 13.586.547 13 1.25 13' />
    </g>
    <defs>
      <clipPath id='2da1ccb5191f40047b3c9e7a7f39186e__a'>
        <path d='M0 0h20v30H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedThumbsUpLgBoldIcon);
export default ForwardRef;
