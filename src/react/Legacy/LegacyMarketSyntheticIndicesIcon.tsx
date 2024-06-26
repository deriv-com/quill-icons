import * as React from 'react';
import { Ref, forwardRef } from 'react';
import { QuillSvgProps, sizes } from '../../types';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
export const LegacyMarketSyntheticIndicesIcon = (
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
    <path d='M12.5 1h.023a.5.5 0 0 1 .27.095q.106.077.161.195l-.038-.068a.5.5 0 0 1 .044.083l2.994 6.485a.6.6 0 0 1 .036.109A.5.5 0 0 1 16 8l-.003.055-.004.03L16 8a.5.5 0 0 1-.071.258l-.003.004-4 6.5-.004.005a.5.5 0 0 1-.187.174l-.011.006-.026.012-.045.017.07-.029A.5.5 0 0 1 11.5 15l.073-.005-.049.005H3.5a.5.5 0 0 1-.15-.023 1 1 0 0 1-.08-.033.5.5 0 0 1-.132-.1l.062.056a.5.5 0 0 1-.154-.19l.036.064-.017-.028-.019-.037-3-6.5A.5.5 0 0 1 0 8v-.01a1 1 0 0 1 .006-.066L0 8a.5.5 0 0 1 .089-.285l-.032.053.02-.035.012-.018 4.5-6.5a.5.5 0 0 1 .187-.162l.019-.009.039-.016-.058.025A.5.5 0 0 1 5 1l-.083.007A1 1 0 0 1 4.99 1H12.5M6.827 8.5H1.28l2.322 5.031L4.6 12.2a.5.5 0 0 1 .847.523L5.4 12.8 4.5 14h6.19L7.989 8.598l-1.584 2.195a.5.5 0 0 1-.856-.508l.046-.078zm5.577-6.014L8.783 7.5H10.5a.5.5 0 0 1 .09.992l-.09.008H9.059l2.486 4.971L14.604 8.5H12.5a.5.5 0 0 1-.09-.992l.09-.008h2.218zM11.521 2H5.809l.638 1.276A.5.5 0 0 1 5.6 3.8l-.047-.076-.624-1.246L1.453 7.5H7.44l-.887-1.776A.5.5 0 0 1 7.4 5.2l.047.076.699 1.398z' />
  </svg>
);
const ForwardRef = forwardRef(LegacyMarketSyntheticIndicesIcon);
export default ForwardRef;
