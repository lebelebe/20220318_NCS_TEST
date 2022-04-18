import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Formcontact from './Formcontact';
import '../css/modal.scss';
import {Route, Routes} from 'react-router-dom'

class Modalform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className='position-fixed' id="modal">
        <Button color="danger" onClick={this.toggle}>면접제안</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} charcode="X">Modal title</ModalHeader>
          <ModalBody>
            <Routes>
              <Route path='/' element={<Formcontact dbinfo={ {         
                    titlenm : '리액트스트랩 모듈로 만든 폼 아마존과연동', 
                    type : 'contactWrite',
                    crud : 'insert',
                    mapper : 'IntroduceSql',
                    mapperid : 'contactInsert'
                    }
                    }></Formcontact>}>
              </Route>   
            </Routes>
          </ModalBody>
          <ModalFooter>
            footer
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Modalform;