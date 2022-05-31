import PropTypes from 'prop-types';
import { 
    styled, 
    CssBaseline, 
    Button, 
    Box, 
    Typography, 
    SwipeableDrawer 
} from '@mui/material';
import { Global } from '@emotion/react';
import { grey } from '@mui/material/colors';
W
const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
  height: '100%',
  backgroundColor:
    theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
  borderRadius: 3,
  position: 'absolute',
  top: 8,
  left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
  const { window, isOpen } = props;

  const toggleDrawer = (newOpen) => () => {
    props.value(newOpen)
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: 'visible',
          },
        }}
      />
      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: 'absolute',
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <Typography sx={{ p: 2, color: 'text.secondary', height: 60}}></Typography>
        </StyledBox>
        <StyledBox
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center',
            height: '100%',
            overflow: 'auto',
          }}
        >
          <Button sx={{ fontSize: 16}}>تعديل المنشور</Button>
          <Button sx={{ fontSize: 16}}>الانتقال للمنشور</Button>
          <Button sx={{ fontSize: 16}}>حذف المنشور</Button>
          <Button sx={{ color: 'red', mt: 2, fontSize: 16}} onClick={toggleDrawer(false)}>إلغاء</Button>
        </StyledBox>
      </SwipeableDrawer>
    </Root>
  );
}

SwipeableEdgeDrawer.propTypes = {
  window: PropTypes.func,
};

export default SwipeableEdgeDrawer;
