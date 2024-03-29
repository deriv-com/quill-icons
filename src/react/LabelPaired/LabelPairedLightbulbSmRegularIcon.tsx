import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedLightbulbSmRegularIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={11}
    height={22}
    viewBox='0 0 11 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M8.727 10.832c.437-.656.71-1.422.71-2.27 0-2.16-1.777-3.937-3.937-3.937a3.94 3.94 0 0 0-3.937 3.938c0 .847.246 1.613.683 2.269.11.137.246.328.383.52a13 13 0 0 1 1.039 1.558c.246.438.383.902.437 1.367H3.23c-.082-.328-.164-.656-.328-.957a12 12 0 0 0-.957-1.422l-.41-.574a4.8 4.8 0 0 1-.847-2.761A4.8 4.8 0 0 1 5.5 3.75a4.82 4.82 0 0 1 4.813 4.813c0 1.039-.329 1.968-.876 2.761l-.41.574c-.355.465-.683.93-.957 1.422-.164.301-.246.602-.328.93h-.875c.082-.437.192-.902.438-1.34.3-.547.71-1.094 1.039-1.586a6 6 0 0 0 .383-.52zM5.5 6.375c-1.23 0-2.187.984-2.187 2.188A.45.45 0 0 1 2.875 9a.43.43 0 0 1-.437-.437A3.075 3.075 0 0 1 5.5 5.5a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437M4.242 16c.192.52.684.875 1.258.875.547 0 1.04-.355 1.23-.875zm-.93-.437v-.137c0-.164.11-.301.274-.301h3.8c.165 0 .301.137.301.3v.137c0 1.231-.984 2.188-2.187 2.188a2.16 2.16 0 0 1-2.187-2.187' />
    </g>
    <defs>
      <clipPath id='fd1863559d9594d5818825cf06bbef64__a'>
        <path d='M0 0h11v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedLightbulbSmRegularIcon);
export default ForwardRef;
