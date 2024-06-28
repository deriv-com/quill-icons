import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyDealCancellationIcon = (
  { iconSize = 'md', title, titleId, ...props }: QuillSvgProps & SVGRProps,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 16 16'
    {...sizes[iconSize]}
    role='img'
    ref={ref}
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d='M13 0a3 3 0 0 1 .96 5.843c-.298 4.758-2.226 7.831-5.79 9.127a.5.5 0 0 1-.34 0C3.941 13.556 2 10.026 2 4.5a.5.5 0 0 1 .394-.489 9.8 9.8 0 0 0 2.617-.95q1.468-.801 2.644-1.923a.5.5 0 0 1 .69 0q.784.749 1.697 1.353A3 3 0 0 1 13 0M8 2.178l-.31.269a13.6 13.6 0 0 1-2.2 1.492q-.774.422-1.657.715l-.449.139-.381.102.009.326c.148 4.472 1.704 7.313 4.666 8.612l.25.104.072.028.072-.028c2.944-1.175 4.57-3.794 4.875-7.938L13 6a3 3 0 0 1-2.92-2.306 13.5 13.5 0 0 1-1.434-.977l-.336-.27zM8 4a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L7.5 11.5v-7A.5.5 0 0 1 8 4m5-3a2 2 0 1 0 0 4 2 2 0 0 0 0-4m.5 1.5a.5.5 0 0 1 .09.992l-.09.008h-1a.5.5 0 0 1-.09-.992l.09-.008z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyDealCancellationIcon);
export default ForwardRef;
