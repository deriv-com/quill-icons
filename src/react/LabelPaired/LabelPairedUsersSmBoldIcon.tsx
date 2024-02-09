import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const LabelPairedUsersSmBoldIcon = (
  { title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={18}
    height={22}
    viewBox='0 0 18 22'
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g>
      <path d='M4.188 8.125Q2.958 8.098 2.3 7.031q-.601-1.094 0-2.187.656-1.067 1.886-1.094 1.23.027 1.887 1.094.601 1.094 0 2.187-.656 1.067-1.886 1.094m10.062 0q-1.23-.027-1.887-1.094-.6-1.094 0-2.187.657-1.067 1.887-1.094 1.23.027 1.887 1.094.6 1.094 0 2.187-.657 1.067-1.887 1.094m-14 3.8q.027-1.257.848-2.077.82-.82 2.078-.848h1.148q.657 0 1.23.273-.054.301-.054.602.054 1.613 1.176 2.625H.824q-.52-.055-.574-.574m11.074.575q1.122-1.013 1.176-2.625 0-.3-.055-.602A2.8 2.8 0 0 1 13.675 9h1.15q1.257.027 2.077.848.82.82.848 2.078-.055.519-.574.574zM9 8.563q-.738.027-1.148.656a1.4 1.4 0 0 0 0 1.312q.41.63 1.148.656.738-.027 1.148-.656a1.4 1.4 0 0 0 0-1.312q-.41-.63-1.148-.656M9 12.5q-.71 0-1.312-.355a2.631 2.631 0 0 1-1.312-2.27 2.63 2.63 0 0 1 1.311-2.27A2.53 2.53 0 0 1 9 7.25q.71 0 1.313.355.6.356.957.957.355.63.355 1.313a2.63 2.63 0 0 1-1.312 2.27A2.53 2.53 0 0 1 9 12.5m-1.613 2.188a2.4 2.4 0 0 0-1.422.492 2.25 2.25 0 0 0-.82 1.258h7.71a2.25 2.25 0 0 0-.82-1.258 2.4 2.4 0 0 0-1.422-.492zm0-1.313h3.226q1.532.027 2.57 1.066 1.04 1.04 1.067 2.57-.056.684-.738.739H4.488q-.683-.056-.738-.738.027-1.532 1.066-2.57 1.04-1.04 2.57-1.067' />
    </g>
    <defs>
      <clipPath id='a90193475a7285c2ad58b3457618cd25__a'>
        <path d='M0 0h18v22H0z' />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(LabelPairedUsersSmBoldIcon);
export default ForwardRef;
